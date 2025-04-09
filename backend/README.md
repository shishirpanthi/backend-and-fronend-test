# Backend MERN Stack Project

This README provides instructions for setting up and running the backend of the MERN stack login panel project.

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

## Installation

1. Navigate to the backend directory:

   ```
   cd c:\Users\ccrpa\Desktop\testing\project\backend
   ```

2. Install the required packages:

   ```
   npm install
   ```

   This will install the dependencies listed in `package.json`.

## Configuration

1. Set up your MongoDB connection in `src/config/db.js`. Ensure that you have a valid MongoDB URI.

## Running the Application

1. Start the server:

   ```
   npm start
   ```

   The server will run on `http://localhost:5000` by default.

## API Endpoints

### Authentication Routes

- **POST /api/auth/register**
  - Description: Register a new user.
  - Request Body: `{ username: String, password: String }`
  
- **POST /api/auth/login**
  - Description: Log in an existing user.
  - Request Body: `{ username: String, password: String }`

## Folder Structure

- `src/app.js`: Entry point of the application.
- `src/controllers/authController.js`: Contains authentication logic.
- `src/models/User.js`: Defines the User schema.
- `src/routes/authRoutes.js`: Contains authentication routes.
- `src/config/db.js`: Database connection logic.

## License

This project is licensed under the MIT License.