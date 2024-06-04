# RecipeReady

RecipeReady is a dynamic and interactive web application that allows users to search for ingredients, select them, and get recipe suggestions based on the selected ingredients. This project aims to help users easily find recipes they can make with the ingredients they have on hand, reducing food waste and promoting home cooking.

## Features

- **Ingredient Search**: Users can search for ingredients using a search bar. As they type, a list of matching ingredients is displayed.
- **Ingredient Selection**: Users can select ingredients from the search results, which are then added to a list of selected ingredients.
- **Selected Ingredients Display**: The selected ingredients are displayed in a neat, organized manner with the option to remove any ingredient.
- **Recipe Suggestions**: Once at least three ingredients are selected, users can click the "Show Recipes" button to fetch and display recipes that can be made with those ingredients.
- **Responsive Design**: The application is designed to be responsive and user-friendly across various devices and screen sizes.

## Technologies Used

- **Frontend**:
  - React: For building the user interface.
  - CSS: For styling the components and layout.
- **Backend**:
  - Flask: For handling the backend logic and API requests.
- **Other Tools**:
  - Google Generative API: For generating recipes.
  - Fetch API: For making HTTP requests to the backend server.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Python and Flask installed

### Installation

1. **Clone the repository**:

    ```bash
   git clone https://github.com/yourusername/recipeready.git
   cd recipeready

2. **Install frontend dependencies**:

     ```bash
    cd frontend
    npm install

3. **Start the backend server**:

   ```bash
   cd backend

   pip install -r requirements.txt

   flask run

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.


## Project Structure

- `frontend/`: Contains the React frontend code.
- `public/`: Public assets and HTML file.
- `src/`: React components, CSS, and other frontend logic.
- `backend/`: Contains the Flask backend code.
- `app.py`: Main application file.
- `requirements.txt`: List of Python dependencies.
