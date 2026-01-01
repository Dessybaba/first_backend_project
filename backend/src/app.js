import express from "express";

const app = express(); // create an express app

app.use(express.json());

// routes import
import userRoutes from "./routes/user_route.js";

// routes declaration
app.use ('/api/users', userRoutes);

// example route: http://localhost:4000/api/users/register


export default app;