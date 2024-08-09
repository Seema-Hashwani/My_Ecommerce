import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db('cph');
    const orders = database.collection('orders');

    // Fetch all orders
    const orderList = await orders.find({}).toArray();

    console.log('Fetched Orders:', JSON.stringify(orderList, null, 2)); // Log JSON data

    return NextResponse.json(orderList);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  } finally {
    await client.close();
  }
}
