# Shoppology

Shoppology is a full-stack e-commerce application that allows users to browse products, manage orders, and interact with various features such as news feeds, shop management, and complaints. The application is built using Node.js, Express, and MongoDB for the backend, and React for the frontend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)

## Features

- User authentication and authorization
- Product browsing and management
- Order management
- News feed
- Shop management
- Complaint management
- File uploads
- Chat AI widget integration

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/shoppology.git
   cd shoppology

   ```

2. Install dependencies for both backend and frontend:

   cd backend
   npm install
   cd ../client
   npm install

3. Create a .env file in the backend directory and add the following environment variables:

   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id

4. Create a .env file in the client directory and add the following environment variables:

   REACT_APP_API_URL=http://localhost:5000/api

5. Seed the database (optional):

   cd backend
   node seeder.js

## Usage

1. Start the backend server:

   npm start

2. Start the frontend development server:

   cd client
   npm start

3. Open your browser and navigate to

   http://localhost:3000

## API Endpoints

### User Routes

- POST /api/user/login - Login user
- POST /api/user/register - Register user
- GET /api/user/profile - Get user profile
- PUT /api/user/profile - Update user profile

### Product Routes

- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create new product
- PUT /api/products/:id - Update product by ID
- DELETE /api/products/:id - Delete product by ID

### Order Routes

- GET /api/order - Get all orders
- GET /api/order/:id - Get order by ID
- POST /api/order - Create new order
- PUT /api/order/:id - Update order by ID
- DELETE /api/order/:id - Delete order by ID

### Upload Routes

- POST /api/upload - Upload a file
- POST /api/upload/description - Upload a file with description

### News Routes

- GET /api/news - Get all news
- GET /api/news/:id - Get news by ID
- POST /api/news - Create new news
- PUT /api/news/:id - Update news by ID
- DELETE /api/news/:id - Delete news by ID

### Shop Routes

- GET /api/shops - Get all shops
- GET /api/shops/:id - Get shop by ID
- POST /api/shops - Create new shop
- PUT /api/shops/:id - Update shop by ID
- DELETE /api/shops/:id - Delete shop by ID

### Complaint Routes

- GET /api/complain - Get all complaints
- GET /api/complain/:id - Get complaint by ID
- POST /api/complain - Create new complaint
- PUT /api/complain/:id - Update complaint by ID
- DELETE /api/complain/:id - Delete complaint by ID

## Folder Structure

Shoppology/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controller/
│ │ ├── ComplainController.js
│ │ ├── NewsController.js
│ │ ├── orderController.js
│ │ ├── productController.js
│ │ ├── requestController.js
│ │ ├── ShopController.js
│ │ └── userController.js
│ ├── data/
│ │ ├── order.js
│ │ ├── products.js
│ │ └── users.js
│ ├── middlewares/
│ ├── model/
│ ├── routes/
│ │ ├── uploadRoutes.js
│ │ ├── productRoutes.js
│ │ ├── userRoutes.js
│ │ ├── orderRoutes.js
│ │ ├── requestRoutes.js
│ │ ├── NewsRoutes.js
│ │ ├── ShopRoutes.js
│ │ └── ComplainRoutes.js
│ ├── uploads/
│ ├── utils/
│ ├── app.js
│ ├── seeder.js
│ └── server.js
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── screens/
│ │ ├── App.js
│ │ └── index.js
│ ├── .env
│ └── package.json
├── document/
├── .env
├── .gitignore
├── globalConfig.json
├── jest-mongodb-config.js
├── jest.config.js
└── package.json
