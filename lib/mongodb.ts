import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI || '');

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to ensure the MongoClient instance is reused
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production mode, create a new MongoClient instance
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db('cph'); // Updated to 'cph'
}
