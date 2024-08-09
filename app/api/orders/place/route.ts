import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const { cart, total, shippingAddress, paymentMethod } = await request.json();

    // Validate input
    if (!cart || !total || !shippingAddress || !paymentMethod) {
      return NextResponse.json({ success: false, error: 'All fields are required.' });
    }

    const db = await connectToDatabase();
    const collection = db.collection('orders');

    // Insert the new order
    const result = await collection.insertOne({
      cart,
      total,
      shippingAddress,
      paymentMethod,
      createdAt: new Date(),
    });

    if (result.acknowledged) {
      return NextResponse.json({ success: true, result });
    } else {
      throw new Error('Failed to insert order');
    }
  } catch (error) {
    console.error('Error placing order:', error);
    let errorMessage = 'An unknown error occurred';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage });
  }
}
