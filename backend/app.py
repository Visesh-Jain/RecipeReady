from flask import Flask, request, jsonify
import re
from flask_cors import CORS


import google.generativeai as genai

GOOGLE_API_KEY = 'API_KEY'

genai.configure(api_key=GOOGLE_API_KEY)

app = Flask(__name__)
CORS(app)

@app.route("/recipes", methods=["POST"])
def generate_recipes():
    try:
        # Get ingredients from JSON request
        data = request.get_json()
        ingredients = data.get("ingredients", [])

        if not ingredients:
            return jsonify({"error": "Missing ingredients in request body"}), 400

        prompt = "Write me a few recipes using these ingredients: " + \
            ", ".join(ingredients)

        model = genai.GenerativeModel('gemini-1.5-flash')

        # Make the API call with proper error handling
        try:
            response = model.generate_content(prompt)
            generated_text = response.text
        except Exception as e:
            return jsonify({"error": f"Error calling GenerativeModel API: {str(e)}"}), 500

        # Parse the generated text to extract recipes (implementation may vary)
        recipes = parse_recipes(generated_text)

        return jsonify({"recipes": recipes})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500

# Function to extract recipes from generated text (replace with your logic)


import re

# Define a function to parse the data and extract recipe objects
def parse_recipes(data):
    recipes = []
    
    # Pattern to match each recipe block
    recipe_pattern = re.compile(
        r'\*\*(\d+)\. (.+?)\*\*\n\n\*\*Ingredients:\*\*\n(.*?)\n\n\*\*Instructions:\*\*\n(.*?)(?=\n\n\*\*|$)',
        re.DOTALL
    )
    
    # Pattern to match individual ingredients
    ingredient_pattern = re.compile(r'\* (.+?)\n')
    
    # Pattern to match individual instructions
    instruction_pattern = re.compile(r'\d+\.\s*(.+?)(?=\d+\.|$)', re.DOTALL)
    
    # Find all recipes in the data
    for match in recipe_pattern.finditer(data):
        recipe_num = match.group(1).strip()
        recipe_name = match.group(2).strip()
        ingredients_block = match.group(3).strip()
        instructions_block = match.group(4).strip()
        
        # Extract ingredients
        ingredients = ingredient_pattern.findall(ingredients_block)
        
        # Extract instructions
        instructions = [inst.strip() for inst in instruction_pattern.findall(instructions_block)]
        
        # Create a recipe object
        recipe = {
            "recipe_num": recipe_num,
            "recipe_name": recipe_name,
            "ingredients": ingredients,
            "instructions": instructions
        }
        recipes.append(recipe)
    
    return recipes

if __name__ == "__main__":
    app.run(debug=True)
