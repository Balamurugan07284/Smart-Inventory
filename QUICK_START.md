# 🚀 Quick Start Guide

## MongoDB Database Integration - READY TO USE!

### ✅ What's Been Set Up:
1. **MongoDB Connection**: `mongodb://localhost:27017/smartrack`
2. **User Authentication**: Signup & Signin with password hashing
3. **Database Storage**: User data automatically saved to MongoDB
4. **JWT Tokens**: Secure authentication tokens
5. **API Endpoints**: Ready-to-use authentication APIs

### 🏃‍♂️ How to Run:

#### 1. Start the Backend Server
```bash
cd backend
npm start
```
✅ Server running on: http://localhost:5000
✅ MongoDB connected automatically

#### 2. Open Frontend Pages
- **Signup**: Open `signup.html` in browser
- **Signin**: Open `signin.html` in browser
- **Home**: Open `index.html` in browser

### 🧪 Test the Integration:

#### Create a New User:
1. Open `signup.html`
2. Fill form: Name, Email, Password
3. Click "Create Account"
4. ✅ User data saved to MongoDB `users` collection

#### Login:
1. Open `signin.html`
2. Enter email/password from signup
3. Click "Sign In"
4. ✅ Redirects to dashboard with authentication token

### 🔍 Verify Database:
```bash
cd backend
node verify-db.js
```
Shows all users in database and connection status.

### 📊 Database Structure:
- **Database**: `smartrack`
- **Collection**: `users`
- **Data Stored**: 
  - Name (string)
  - Email (string, unique)
  - Password (hashed)
  - Date created

### 🔒 Security Features:
- ✅ Password hashing (bcryptjs)
- ✅ JWT authentication
- ✅ Input validation
- ✅ CORS protection

### 🌐 API Endpoints Available:
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user
- `GET /api/inventory` - Get inventory items
- Plus full CRUD for inventory management

**Your MongoDB database is now fully integrated and ready to store signin/signup data! 🎉**