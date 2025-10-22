// Create this file: server/seedCategories.js
// Run it once to populate categories in your database

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');

dotenv.config();

const categories = [
  {
    name: 'Technology',
    description: 'Tech news, tutorials, and innovations',
  },
  {
    name: 'Programming',
    description: 'Code tutorials, best practices, and development',
  },
  {
    name: 'Web Development',
    description: 'Frontend, backend, and full-stack development',
  },
  {
    name: 'Lifestyle',
    description: 'Life tips, health, and personal development',
  },
  {
    name: 'Travel',
    description: 'Travel guides, tips, and adventures',
  },
  {
    name: 'Food',
    description: 'Recipes, restaurants, and culinary experiences',
  },
  {
    name: 'Business',
    description: 'Entrepreneurship, startups, and business insights',
  },
  {
    name: 'Design',
    description: 'UI/UX design, graphics, and creative work',
  },
  {
    name: 'Education',
    description: 'Learning resources and educational content',
  },
  {
    name: 'Entertainment',
    description: 'Movies, games, music, and fun content',
  },
];

const seedCategories = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing categories (optional)
    await Category.deleteMany({});
    console.log('Cleared existing categories');

    // Insert categories
    await Category.insertMany(categories);
    console.log('Categories seeded successfully!');

    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding categories:', error);
    process.exit(1);
  }
};

seedCategories();