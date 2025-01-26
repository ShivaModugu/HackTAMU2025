import requests

# Define the base URL for your API
base_url = "http://127.0.0.1:5000/get_vehicle_by_car_engine"

def test_get_vehicle_by_car_engine(engine_type):
    """Test the GET /get_vehicle_by_car_engine endpoint with a query parameter."""
    print(f"Testing GET {base_url}?engine_type={engine_type}...")
    params = {"engine_type": engine_type}  # Query parameter
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        print("Response:", response.json())
    else:
        print(f"Failed! Status Code: {response.status_code}, Response: {response.text}")

if __name__ == "__main__":
    # Test GET /get_vehicle_by_car_engine with different engine types
    test_get_vehicle_by_car_engine("Hybrid")
    test_get_vehicle_by_car_engine("Gasoline")
    test_get_vehicle_by_car_engine("Electric")
