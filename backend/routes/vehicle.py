from flask import Blueprint, request, jsonify
from db import Database

vehicle_route = Blueprint('user', __name__)
db = None  # Define a placeholder for the db instance


def init_blueprint(database):
    """Initialize the blueprint with a database instance."""
    global db
    db = database

@vehicle_route.route ('/get_vehicle_by_car_engine' , methods=['GET'])
def get_cars_by_car_engine():
    print("Request Headers:", request.headers)
    print("Request Data:", request.data)  # Raw request body
    print("Request JSON:", request.json)
    data = request.json  # Ensure proper parsing of JSON input
    car_engine = data.get('Car_Engine')
    try:
        # Call the stored procedure
        query = """CALL GetCarsByCarEngine(%s)"""
        result = db.execute_query(query, (car_engine,), fetchall=True)

        if result:
            return jsonify({
                "Vehicles": result
            }), 200
        else:
            return jsonify({
                "message": "No cars found. "
            }), 404

    except Exception as e:
        return jsonify({
            "message": f"Failed to fetch cars: {str(e)}"
        }), 500

# 
@vehicle_route.route ('/get_cars_by_fuel_type' , methods=['GET'])
def get_cars_by_fuel_type():
    print("Request Headers:", request.headers)
    print("Request Data:", request.data)  # Raw request body
    print("Request JSON:", request.json)
    data = request.json  # Ensure proper parsing of JSON input
    fuel_type = data.get('Fuel_type')
    try:
        # Call the stored procedure
        query = """CALL GetCarsByFuelType(%s)"""
        result = db.execute_query(query, (fuel_type,), fetchall=True)

        if result:
            return jsonify({
                "Vehicles": result
            }), 200
        else:
            return jsonify({
                "message": "No cars found. "
            }), 404

    except Exception as e:
        return jsonify({
            "message": f"Failed to fetch cars: {str(e)}"
        }), 500
    


#
@vehicle_route.route ('/get_cars_by_filter' , methods=['GET'])
def get_cars_by_filter():
    print("Request Headers:", request.headers)
    print("Request Data:", request.data)  # Raw request body
    print("Request JSON:", request.json)
    data = request.json  # Ensure proper parsing of JSON input
    min_price = data.get('Min_Price')
    max_price = data.get('Max_Price')
    color_combo = data.get('Color_Combo')
    vehicle_type = data.get('Vehicle_Type')
    try:
        # Call the stored procedure
        query = """CALL GetCarsByFilter(%s,%s,%s,%s)"""
        result = db.execute_query(query, (min_price, max_price, color_combo, vehicle_type), fetchall=True)

        if result:
            return jsonify({
                "Vehicles": result
            }), 200
        else:
            return jsonify({
                "message": "No cars found. "
            }), 404

    except Exception as e:
        return jsonify({
            "message": f"Failed to fetch cars: {str(e)}"
        }), 500
    


# 
@vehicle_route.route ('/get_cars_by_score' , methods=['GET'])
def get_cars_by_score():
    print("Request Headers:", request.headers)
    print("Request Data:", request.data)  # Raw request body
    print("Request JSON:", request.json)
    data = request.json  # Ensure proper parsing of JSON input
    color_combo = data.get('Colors')
    vehicle_type_v = data.get('Vehicle_Type')
    min_price  = data.get('Min_Price')
    max_price  = data.get('Max_Price')

    try:
        # Call the stored procedure
        query = """CALL GetVehicleByScore(%s, %s, %s, %s)"""
        result = db.execute_query(query, (color_combo, vehicle_type_v, min_price, max_price), fetchall=True)

        if result:
            return jsonify({
                "Vehicles": result
            }), 200
        else:
            return jsonify({
                "message": "No cars found. "
            }), 404

    except Exception as e:
        return jsonify({
            "message": f"Failed to fetch cars: {str(e)}"
        }), 500
    


