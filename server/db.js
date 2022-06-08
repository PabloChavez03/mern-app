import mongoose from "mongoose";
import { MONGODB_URI } from './config.js'

export const connectDb = mongoose
  .connect(MONGODB_URI)
  .then((db) => {
    console.log("Connected to", db.connection.name);
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });
