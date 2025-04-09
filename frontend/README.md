# Frontend README for MERN Stack Login Panel

# Project Title: MERN Stack Login Panel

## Overview
This project is a simple login panel built using the MERN stack (MongoDB, Express, React, Node.js). It provides a user-friendly interface for users to log in and is structured to separate the frontend and backend functionalities.

## Frontend Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation
1. Navigate to the frontend directory:
   ```
   cd c:\Users\ccrpa\Desktop\testing\project\frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```

### Running the Frontend
To start the frontend application, run:
```
npm start
```
This will start the React application and open it in your default web browser at `http://localhost:3000`.

## Project Structure
- **public/index.html**: The main HTML file for the React application.
- **src/App.js**: The main component that sets up routing.
- **src/components/LoginForm.js**: Contains the login form and handles submission.
- **src/context/AuthContext.js**: Provides authentication state and functions.
- **src/hooks/useAuth.js**: Custom hook for authentication functionality.
- **src/pages/LoginPage.js**: Renders the LoginForm component.
- **src/styles/LoginForm.css**: CSS styles for the LoginForm component.

## Usage
- Navigate to the login page to access the login form.
- Enter your credentials and submit the form to log in.

## Additional Information
For backend setup and API details, please refer to the backend README located in `c:\Users\ccrpa\Desktop\testing\project\backend\README.md`. 

## License
This project is licensed under the MIT License.