"use client";
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    return client.db('BHXGEAR');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

