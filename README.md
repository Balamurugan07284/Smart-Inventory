# Smart Inventory Tracking System

A full-stack web application with MongoDB database integration for user authentication and inventory management.

## MongoDB Database Setup

### Database Configuration
- **Database URL**: `mongodb://localhost:27017/smartrack`
- **Database Name**: `smartrack` 
- **Collections**: 
  - `users` - Stores user signup/signin data
  - `inventories` - Stores inventory items (future implementation)

### Prerequisites
1. **MongoDB Installation**: Ensure MongoDB is installed and running on your local machine
   - Default connection: `mongodb://localhost:27017/`
   - Start MongoDB service before running the application

2. **Node.js Dependencies**: All required packages are already installed
   - mongoose: MongoDB object modeling
   - bcryptjs: Password hashing
   - jsonwebtoken: JWT authentication
   - express: Web server framework
   - cors: Cross-origin resource sharing

## Running the Application

### 1. Start MongoDB
Make sure MongoDB service is running on your system.

### 2. Start Backend Server
```bash
cd backend
npm start
```
Server will run on: `http://localhost:5000`

### 3. Access Frontend
Open any of these HTML files in your browser:
- `index.html` - Homepage
- `signup.html` - User registration
- `signin.html` - User login
- `dashboard.html` - Dashboard (after login)

## Authentication Features

### User Registration (signup.html)
- **Endpoint**: `POST /api/auth/signup`
- **Fields**: name, email, password
- **Security**: Passwords are hashed using bcryptjs
- **Validation**: 
  - All fields required
  - Email format validation
  - Password minimum 6 characters
  - Password confirmation matching
- **Database Storage**: User data saved to MongoDB `users` collection

### User Login (signin.html)
- **Endpoint**: `POST /api/auth/signin`
- **Fields**: email, password
- **Authentication**: Compares hashed passwords
- **Response**: JWT token for authenticated sessions
- **Auto-redirect**: Successful login redirects to dashboard

## Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  date: Date (default: now)
}
```

## API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user

### Inventory Routes (Available)
- `GET /api/inventory` - Get all inventory items
- `GET /api/inventory/:id` - Get single item
- `POST /api/inventory` - Add new item
- `PUT /api/inventory/:id` - Update item
- `DELETE /api/inventory/:id` - Delete item

## Environment Configuration

The application uses environment variables defined in `backend/.env`:
```
MONGO_URI=mongodb://localhost:27017/smartrack
JWT_SECRET=your_jwt_secret_key_change_this_in_production
PORT=5000
NODE_ENV=development
```

## Testing the MongoDB Integration

### 1. Test User Registration
1. Open `signup.html` in browser
2. Fill out the registration form
3. Click "Create Account"
4. Check MongoDB for new user entry:
   ```bash
   mongo
   use smartrack
   db.users.find()
   ```

### 2. Test User Login
1. Open `signin.html` in browser
2. Use registered credentials
3. Click "Sign In"
4. Should redirect to dashboard with JWT token stored in localStorage

### 3. Verify Database Storage
Connect to MongoDB and verify data:
```bash
# Connect to MongoDB
mongo

# Switch to smartrack database
use smartrack

# View all users
db.users.find().pretty()

# Count users
db.users.count()
```

## Security Features

1. **Password Hashing**: All passwords hashed with bcryptjs
2. **JWT Authentication**: Secure token-based authentication
3. **Input Validation**: Server-side validation for all inputs
4. **CORS Protection**: Configured for secure cross-origin requests
5. **Environment Variables**: Sensitive data stored in .env file

## Frontend Features

1. **Responsive Design**: Mobile-friendly Tailwind CSS styling
2. **Form Validation**: Client-side validation with error messages
3. **Loading States**: Visual feedback during API calls
4. **Auto-redirect**: Seamless navigation after successful actions
5. **Error Handling**: User-friendly error messages

## File Structure
```
Bala Project/
├── backend/
│   ├── models/
│   │   └── User.js          # User schema
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── inventory.js     # Inventory routes
│   ├── .env                 # Environment variables
│   ├── db.json             # Sample inventory data
│   ├── package.json        # Dependencies
│   └── server.js           # Express server
├── css/
│   └── style.css           # Custom styles
├── index.html              # Homepage
├── signup.html             # Registration page
├── signin.html             # Login page
├── dashboard.html          # Dashboard
└── README.md              # This file
```

The MongoDB database is now fully integrated and ready to store user authentication data from your signin and signup forms!