"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardComponent as Card, Button, CardContent, CardHeader } from '@/components/ui';


const cars = [
  { id: 1, name: "Car A", price: 30000, doors: 4, fuelEconomy: 30, image: "/images/carA.jpg", details: "Car A is a reliable sedan with excellent fuel efficiency and a modern design." },
  { id: 2, name: "Car B", price: 25000, doors: 2, fuelEconomy: 25, image: "/images/carB.jpg", details: "Car B is a sporty coupe, perfect for those who enjoy performance and style." },
  { id: 3, name: "Car C", price: 40000, doors: 4, fuelEconomy: 35, image: "/images/carC.jpg", details: "Car C is a premium SUV offering luxury and top-tier fuel economy." },
  { id: 4, name: "Car D", price: 35000, doors: 4, fuelEconomy: 28, image: "/images/carD.jpg", details: "Car D combines spaciousness with innovative technology for family trips." },
  { id: 5, name: "Car E", price: 22000, doors: 4, fuelEconomy: 33, image: "/images/carE.jpg", details: "Car E is an affordable and eco-friendly compact car." },
  { id: 6, name: "Car F", price: 45000, doors: 4, fuelEconomy: 40, image: "/images/carF.jpg", details: "Car F is a luxury hybrid vehicle with exceptional fuel economy and features." }
];

function calculateMatch(car, filters) {
  let match = 100;

  if (filters.price && car.price > filters.price) match -= 20;
  if (filters.doors && car.doors !== filters.doors) match -= 30;
  if (filters.fuelEconomy && car.fuelEconomy < filters.fuelEconomy) match -= 20;

  return match;
}

const CarMatch = () => {
  const [filters, setFilters] = useState({ price: null, doors: null, fuelEconomy: null });
  const [showDetails, setShowDetails] = useState(null);
  const [compare, setCompare] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [showCompareView, setShowCompareView] = useState(false);

  const filteredCars = cars
    .map((car) => ({ ...car, match: calculateMatch(car, filters) }))
    .sort((a, b) => b.match - a.match);

  const handleCompare = (car) => {
    setCompare((prev) => {
      if (prev.includes(car.id)) {
        return prev.filter((id) => id !== car.id);
      } else if (prev.length < 3) {
        return [...prev, car.id];
      }
      return prev;
    });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-blue-800 text-white p-4 mb-6">
        <div className="font-bold text-lg">Car Match System</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => setShowCompareView(!showCompareView)}
          >
            Compare ({compare.length})
          </button>
        </div>
      </nav>

      {/* Filters */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Max Price"
            className="border p-2 rounded-lg"
            onChange={(e) => setFilters({ ...filters, price: +e.target.value })}
          />
          <input
            type="number"
            placeholder="Number of Doors"
            className="border p-2 rounded-lg"
            onChange={(e) => setFilters({ ...filters, doors: +e.target.value })}
          />
          <input
            type="number"
            placeholder="Min Fuel Economy"
            className="border p-2 rounded-lg"
            onChange={(e) => setFilters({ ...filters, fuelEconomy: +e.target.value })}
          />
        </div>
      </div>

      {/* Compare View */}
      {showCompareView && compare.length > 0 && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4 overflow-y-auto"
        >
          <h2 className="text-xl font-bold mb-4">Compare Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compare.map((id) => {
              const car = cars.find((car) => car.id === id);
              return (
                <Card key={car.id} className="shadow-lg bg-white rounded-lg">
                  <CardContent>
                    <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                    <p>Price: ${car.price}</p>
                    <p>Doors: {car.doors}</p>
                    <p>Fuel Economy: {car.fuelEconomy} MPG</p>
                    <Button className="mt-4" onClick={() => setCompare(compare.filter((cid) => cid !== car.id))}>
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Button className="mt-4 bg-red-500 text-white" onClick={() => setShowCompareView(false)}>
            Close Compare View
          </Button>
        </motion.div>
      )}

      {/* Top 3 Matches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {filteredCars.slice(0, 3).map((car) => (
          <Card key={car.id} className="shadow-lg bg-white rounded-lg">
            <CardContent>
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-bold mb-2">{car.name}</h3>
              <p>Match: {car.match}%</p>
              <Button className="mt-4" onClick={() => setShowDetails(car.id)}>Show Details</Button>
              <Button
                className="mt-4 ml-2"
                onClick={() => handleCompare(car)}
              >
                {compare.includes(car.id) ? "Remove from Compare" : "Add to Compare"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More */}
      {expanded ? (
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {filteredCars.slice(3).map((car) => (
            <Card key={car.id} className="shadow-lg bg-white rounded-lg">
              <CardContent>
                <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                <p>Match: {car.match}%</p>
                <Button
                  className="mt-4"
                  onClick={() => handleCompare(car)}
                >
                  {compare.includes(car.id) ? "Remove from Compare" : "Add to Compare"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      ) : (
        <Button className="mt-4" onClick={() => setExpanded(true)}>See More</Button>
      )}

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-lg font-bold mb-4">
              {filteredCars.find((car) => car.id === showDetails).name}
            </h3>
            <p className="mb-4">
              {filteredCars.find((car) => car.id === showDetails).details}
            </p>
            <Button onClick={() => setShowDetails(null)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarMatch;
