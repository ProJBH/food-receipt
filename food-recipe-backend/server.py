from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/calculate-recipe', methods=['POST'])
def calculate_recipe():
    selected_dishes = request.json['dishes']
    total_amount = 0
    detailed_recipe = []

    for dish in selected_dishes:
        total_amount += dish['price']
        detailed_recipe.append({
            'name': dish['name'],
            'unitPrice': dish['price']
        })

    return jsonify({'totalAmount': total_amount, 'detailedRecipe': detailed_recipe})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
