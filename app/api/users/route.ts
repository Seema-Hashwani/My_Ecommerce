import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db('cph');
    const users = database.collection('users');
    
    // Fetch all users
    const userList = await users.find({}).toArray();
    
    // Log the user data
    console.log('Fetched users:', JSON.stringify(userList, null, 2));

    return NextResponse.json(userList);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  } finally {
    await client.close();
  }
}
