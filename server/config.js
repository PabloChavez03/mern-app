import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";

export const PORT = process.env.PORT || 3001;

export const CLOUD_NAME = process.env.CLOUD_NAME || "failed cloud name";

export const CLOUD_API_KEY = process.env.CLOUD_API_KEY || "failed cloud api key";

export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || "failed cloud api secret";