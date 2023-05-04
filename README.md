# Food Receipt Application

A simple food receipt application that allows users to select dishes and calculate the total cost of the receipt. The application consists of an Angular frontend and a Flask backend.

## Features

- Users can select dishes from a list of available options.
- The application calculates the total cost of the selected dishes and displays a detailed receipt.
- The backend API calculates the receipt based on the selected dishes and returns the total amount and detailed receipt.

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

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ProJBH/food-receipt.git
```
2. Install Flask:
```bash
pip install Flask flask-cors
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
python server.py
```
3. Open your browser and navigate to `http://localhost:4200` to access the Angular frontend.

## Built With

- [Angular](https://angular.io/) - The frontend framework used
- [Flask](https://flask.palletsprojects.com/) - The backend framework used
- [Python](https://www.python.org/) - The backend programming language
