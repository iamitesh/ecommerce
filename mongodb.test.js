import { MongoClient } from "mongodb";
import "dotenv/config";

async function testConnection() {
  try {
    const client = new MongoClient('mongodb+srv://helloUser:SVMOHTleeLkfN26Q@cluster0.og9fy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    console.log("✅ Connected to MongoDB successfully!");
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:", databases);
    await client.close();
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
  }
}

testConnection();
