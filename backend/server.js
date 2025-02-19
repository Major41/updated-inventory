const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const itemRoutes = require('./routes/itemRoute');
const borrowRoutes = require('./routes/borrow')
const errorHandler = require('./middleware/errorMiddleware');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://robo-lab-system.netlify.app'], // Add production URL here
    credentials: true, // Allow cookies
  })
);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes Middleware
app.use('/api/users', userRoute);
// app.use('/api/products', productRoute);
app.use('/api/items', itemRoutes);
app.use('/api', borrowRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('HomePage');
});

const PORT = process.env.PORT || 5000;

// Error Handling Middleware
app.use(errorHandler);

// Connect to DB and Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
