// Database verification script
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/smartrack')
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
    return verifyDatabase();
  })
  .then(() => {
    console.log('✅ Database verification complete');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Database Error:', err);
    process.exit(1);
  });

async function verifyDatabase() {
  try {
    // Check database connection
    const dbState = mongoose.connection.readyState;
    console.log(`📊 Database Connection State: ${dbState === 1 ? 'Connected' : 'Disconnected'}`);
    
    // Get database name
    const dbName = mongoose.connection.db.databaseName;
    console.log(`🗄️  Database Name: ${dbName}`);
    
    // Count users
    const userCount = await User.countDocuments();
    console.log(`👥 Total Users: ${userCount}`);
    
    // Show all users (without passwords)
    const users = await User.find({}, { password: 0 }).limit(10);
    console.log('📋 Recent Users:');
    users.forEach((user, index) => {
      console.log(`   ${index + 1}. ${user.name} (${user.email}) - ${user.date}`);
    });
    
    // Check collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📁 Collections:');
    collections.forEach(collection => {
      console.log(`   - ${collection.name}`);
    });
    
  } catch (error) {
    console.error('❌ Verification Error:', error);
    throw error;
  }
}