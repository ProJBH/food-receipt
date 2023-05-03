# Food Recipe Application

A simple food recipe application that allows users to select dishes and calculate the total cost of the recipe. The application consists of an Angular frontend and a Flask backend.

## Features

- Users can select dishes from a list of available options.
- The application calculates the total cost of the selected dishes and displays a detailed recipe.
- The backend API calculates the recipe based on the selected dishes and returns the total amount and detailed recipe.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Built With](#built-with)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Install [Node.js](https://nodejs.org/en/download/) (which includes npm) for frontend dependencies.
npm install -g @angular/cli
- Install [Python](https://www.python.org/downloads/) (version 3.x recommended) for backend dependencies.
- Install [pip](https://pip.pypa.io/en/stable/installation/) for managing Python packages.
- Install [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html) for creating a virtual environment for the backend.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/food-recipe.git
```

2. Navigate to the `frontend` folder and install the dependencies:
```bash
cd food-recipe/frontend
npm install
```
3. Navigate to the `backend` folder, create a virtual environment, activate it, and install the dependencies:
```bash
cd ../backend
virtualenv venv
source venv/bin/activate (Linux/Mac) or venv\Scripts\activate (Windows)
pip install -r requirements.txt
```
## Running the Application

1. Start the Angular development server in the `frontend` folder:
```bash
cd ../frontend
ng serve
```
2. In a separate terminal, start the Flask development server in the `backend` folder:
```bash
cd ../backend
python app.py
```
3. Open your browser and navigate to `http://localhost:4200` to access the Angular frontend.

## Built With

- [Angular](https://angular.io/) - The frontend framework used
- [Flask](https://flask.palletsprojects.com/) - The backend framework used
- [Python](https://www.python.org/) - The backend programming language
