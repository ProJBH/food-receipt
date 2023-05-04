from flask import Flask, request, jsonify
from flask_cors import CORS

#This line creates a new Flask application instance and assigns it to the variable app
app = Flask(__name__)

#This line initializes the CORS extension for the Flask application, allowing Cross-Origin Resource Sharing (CORS) for all routes.
CORS(app)

#This line is a route decorator that binds the following function calculate_Receipt() to the specified route (/calculate-Receipt) with the POST method.
@app.route('/calculate-Receipt', methods=['POST'])
def calculate_Receipt():
    #This line extracts the dishes property from the JSON payload of the incoming HTTP request and assigns it to the variable selected_dishes
    selected_dishes = request.json['dishes']
    total_amount = 0
    detailed_Receipt = []

    for dish in selected_dishes:
        total_amount += dish['price']
        detailed_Receipt.append({
            'name': dish['name'],
            'unitPrice': dish['price']
        })

    #This line uses the jsonify helper function to convert a dictionary containing the totalAmount and detailedReceipt properties to JSON format, and returns it as the HTTP response
    return jsonify({'totalAmount': total_amount, 'detailedReceipt': detailed_Receipt})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
