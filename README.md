# FreshMart 🛒

A full-stack e-commerce platform for fresh products built with the MERN stack. FreshMart provides a seamless shopping experience with user authentication, seller dashboard, shopping cart, and order management.

---

## 🚀 Tech Stack

### Frontend

- **React** — UI library for building the interface
- **Vite** — Fast build tool and development server
- **Tailwind CSS** — Utility-first CSS framework
- **React Router** — Client-side routing
- **Axios** — HTTP client for API requests
- **React Hot Toast** — Toast notifications

### Backend

- **Express.js** — Web framework for Node.js
- **MongoDB** — NoSQL database with Mongoose ODM
- **JSON Web Token (JWT)** — Authentication
- **bcryptjs** — Password hashing
- **Multer** — File upload middleware
- **Cloudinary** — Cloud image storage

### Payment

- **Stripe** — Payment processing

---

## ✨ Features

### 👤 Customer Features

- **User Authentication** — Register and login with secure JWT-based authentication
- **Product Browsing** — Browse all products or filter by category
- **Product Search** — Search products by name or category
- **Product Details** — View detailed product information
- **Shopping Cart** — Add/remove items, update quantities
- **Checkout** — Secure checkout with Stripe payment
- **Order Management** — View order history and status
- **Address Management** — Save and manage delivery addresses

### 🏪 Seller Features

- **Seller Authentication** — Separate login for sellers
- **Add Products** — Create new product listings with images
- **Product Management** — View and manage product inventory
- **Order Management** — View and manage customer orders

### 🛠️ System Features

- **Responsive Design** — Works on mobile, tablet, and desktop
- **Loading States** — Smooth loading indicators
- **Error Handling** — User-friendly error messages via toasts
- **Session Management** — Persistent login with cookies

---

## 📁 Project Structure

```
FreshMart/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/   # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── BestSeller.jsx
│   │   │   └── seller/
│   │   ├── context/      # React Context for state management
│   │   ├── pages/        # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── AllProducts.jsx
│   │   │   ├── ProductCategory.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── MyOrders.jsx
│   │   │   ├── AddAddress.jsx
│   │   │   └── seller/
│   │   ├── App.jsx       # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css     # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Express Backend
│   ├── configs/           # Configuration files
│   │   ├── db.js         # MongoDB connection
│   │   ├── cloudinary.js # Cloudinary config
│   │   └── multer.js     # File upload config
│   ├── controllers/      # Route controllers
│   │   ├── userController.js
│   │   ├── sellerController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── addressController.js
│   ├── middlewares/      # Custom middleware
│   │   ├── authUser.js
│   │   └── authSeller.js
│   ├── models/           # Mongoose models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Address.js
│   ├── routes/           # API routes
│   ├── server.js         # Server entry point
│   └── package.json
│
└── README.md
```

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Cloudinary account (for image storage)
- Stripe account (for payments)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd FreshMart
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run server
# or
node server.js
```

### 3. Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=$
```

Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🔌 API Endpoints

### User Routes (`/api/user`)

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| POST   | `/register` | Register a new user         |
| POST   | `/login`    | User login                  |
| GET    | `/is-auth`  | Check authentication status |
| POST   | `/logout`   | User logout                 |

### Seller Routes (`/api/seller`)

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| POST   | `/register` | Register a new seller       |
| POST   | `/login`    | Seller login                |
| GET    | `/is-auth`  | Check seller authentication |
| GET    | `/orders`   | Get seller's orders         |

### Product Routes (`/api/product`)

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | `/list`           | Get all products         |
| GET    | `/list/:category` | Get products by category |
| GET    | `/single/:id`     | Get single product       |
| POST   | `/add`            | Add new product (seller) |
| PUT    | `/update`         | Update product (seller)  |
| DELETE | `/delete/:id`     | Delete product (seller)  |

### Cart Routes (`/api/cart`)

| Method | Endpoint  | Description               |
| ------ | --------- | ------------------------- |
| GET    | `/get`    | Get user's cart           |
| POST   | `/add`    | Add item to cart          |
| POST   | `/update` | Update cart item quantity |

### Order Routes (`/api/order`)

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/place`         | Place an order      |
| GET    | `/user-orders`   | Get user's orders   |
| GET    | `/seller-orders` | Get seller's orders |
| PUT    | `/update-status` | Update order status |

### Address Routes (`/api/address`)

| Method | Endpoint  | Description          |
| ------ | --------- | -------------------- |
| GET    | `/get`    | Get user's addresses |
| POST   | `/add`    | Add new address      |
| PUT    | `/update` | Update address       |

---

## 📱 Pages Overview

| Page                 | Description                                            |
| -------------------- | ------------------------------------------------------ |
| **Home**             | Landing page with banner, categories, and best sellers |
| **All Products**     | Grid view of all available products                    |
| **Product Category** | Products filtered by specific category                 |
| **Product Details**  | Detailed view of a single product                      |
| **Cart**             | Shopping cart with quantity management                 |
| **My Orders**        | User's order history                                   |
| **Add Address**      | Form to add delivery address                           |
| **Seller Dashboard** | Seller's product and order management                  |
| **Login**            | User authentication modal                              |

---

## 🔧 Environment Variables

### Server (.env)

```env
PORT=4000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
STRIPE_SECRET_KEY=sk_test_...
CLIENT_URL=http://localhost:5173
```

### Client (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=$
```

---

## 🚀 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Backend (Render/Railway)

1. Connect your GitHub repository
2. Add environment variables
3. Deploy

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit and push to your fork
5. Create a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [Cloudinary](https://cloudinary.com/)
