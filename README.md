# 📝 MERN Stack Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js (MERN stack). This application demonstrates seamless integration between front-end and back-end components, including database operations, API communication, authentication, and state management.

![MERN Blog](https://img.shields.io/badge/MERN-Stack-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-blue)
![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Features Implemented](#features-implemented)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

- **User Authentication & Authorization**
  - User registration and login with JWT tokens
  - Password hashing with bcrypt
  - Protected routes for authenticated users
  - Role-based access control (user/admin)

- **Blog Post Management**
  - Create, read, update, and delete blog posts
  - Rich text content support
  - Featured image uploads
  - Post categories and tags
  - Draft and published status
  - View counter for posts
  - Slug-based URLs for SEO

- **Comments System**
  - Add comments to blog posts
  - User attribution for comments
  - Timestamp for comments

- **Category Management**
  - Create and manage post categories
  - Filter posts by category

- **Search & Filtering**
  - Search posts by title, content, or tags
  - Category-based filtering
  - Pagination for post listings

- **Responsive Design**
  - Mobile-friendly interface
  - Modern and clean UI
  - Custom CSS styling

---

## 📁 Project Structure

```
mern-blog/
├── client/                    # React frontend
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── PostDetail.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   └── EditPost.jsx
│   │   ├── hooks/           # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   └── usePosts.js
│   │   ├── services/        # API services
│   │   │   └── api.js
│   │   ├── context/         # React context providers
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── server/                   # Express.js backend
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── models/              # Mongoose models
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Category.js
│   ├── routes/              # API routes
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── categories.js
│   ├── middleware/          # Custom middleware
│   │   ├── auth.js
│   │   └── upload.js
│   ├── utils/               # Utility functions
│   ├── uploads/             # Uploaded files storage
│   ├── server.js            # Main server file
│   ├── seedCategories.js    # Database seeding script
│   ├── .env.example
│   └── package.json
│
└── README.md                # Project documentation
```

---

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **express-validator** - Input validation

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Goofy-collab.git
cd mern-stack-integration-Goofy-collab
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Install Client Dependencies

```bash
cd ../client
npm install
```

### 4. Set Up MongoDB Atlas

1. Create a free MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (M0 free tier)
3. Create a database user with a password
4. Whitelist your IP address (or allow access from anywhere: 0.0.0.0/0)
5. Get your connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `mern-blog`

### 5. Configure Environment Variables

#### Server Environment (.env)

Create `server/.env` file:

```bash
cd server
cp .env.example .env
```

Edit `server/.env` and add your values:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/mern-blog?retryWrites=true&w=majority
JWT_SECRET=your_generated_secret_key_here
JWT_EXPIRE=30d
```

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### Client Environment (.env)

Create `client/.env` file:

```bash
cd ../client
cp .env.example .env
```

Edit `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### 6. Seed Categories (Optional but Recommended)

```bash
cd server
node seedCategories.js
```

This will populate your database with 10 default categories.

---

## 🎮 Running the Application

### Start the Backend Server

```bash
cd server
npm run dev
```

Server will run on `http://localhost:5000`

### Start the Frontend Client (in a new terminal)

```bash
cd client
npm run dev
```

Client will run on `http://localhost:5173`

### Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register a New User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### Post Endpoints

#### Get All Posts (Public)
```http
GET /posts?page=1&limit=10&category=category_id
```

**Response:**
```json
{
  "success": true,
  "data": [...posts],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```

#### Get Single Post (Public)
```http
GET /posts/:id
```

#### Search Posts (Public)
```http
GET /posts/search?q=javascript
```

#### Create Post (Protected)
```http
POST /posts
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "My Blog Post",
  "content": "Post content here...",
  "excerpt": "Brief description",
  "category": "category_id",
  "tags": ["javascript", "react"],
  "isPublished": true
}
```

#### Update Post (Protected)
```http
PUT /posts/:id
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content..."
}
```

#### Delete Post (Protected)
```http
DELETE /posts/:id
Authorization: Bearer <jwt_token>
```

#### Add Comment (Protected)
```http
POST /posts/:id/comments
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "content": "Great post!"
}
```

---

### Category Endpoints

#### Get All Categories (Public)
```http
GET /categories
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "category_id",
      "name": "Technology",
      "slug": "technology",
      "description": "Tech news and tutorials"
    }
  ]
}
```

#### Create Category (Protected - Admin)
```http
POST /categories
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "New Category",
  "description": "Category description"
}
```

---

## 🎯 Features Implemented

### ✅ Task 1: Project Setup
- [x] Directory structure for client and server
- [x] MongoDB connection configuration
- [x] Express.js server with middleware
- [x] React app with Vite
- [x] Environment variables management

### ✅ Task 2: Back-End Development
- [x] RESTful API with all required endpoints
- [x] Mongoose models (User, Post, Category)
- [x] Input validation with express-validator
- [x] Error handling middleware
- [x] Post relationships with author and category

### ✅ Task 3: Front-End Development
- [x] React components (PostList, PostDetail, PostForm, etc.)
- [x] React Router navigation
- [x] Custom hooks (useAuth, usePosts)
- [x] Context API for state management
- [x] API service layer

### ✅ Task 4: Integration and Data Flow
- [x] API communication with Axios
- [x] Form validation
- [x] Optimistic UI updates
- [x] Loading and error states
- [x] Data flow between components

### ✅ Task 5: Advanced Features
- [x] User authentication (JWT)
- [x] Protected routes
- [x] Image upload capability
- [x] Pagination implementation
- [x] Search and filter functionality
- [x] Comments system

---

## 📸 Screenshots

### Home Page - Post Listing
![Home Page](./screenshots/home.png)
*Browse all published blog posts with pagination*

### Post Detail Page
![Post Detail](./screenshots/post-detail.png)
*View individual post with comments section*

### Create Post Form
![Create Post](./screenshots/create-post.png)
*Create new blog posts with categories and tags*

### Login Page
![Login](./screenshots/login.png)
*User authentication interface*

### Register Page
![Register](./screenshots/register.png)
*New user registration*

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Week 4 MERN Stack Integration Assignment
- MongoDB Documentation
- Express.js Documentation
- React Documentation
- Vite Documentation

---

