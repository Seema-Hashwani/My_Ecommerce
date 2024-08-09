import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../lib/mongodb';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('products');

    const products = await collection.find().toArray();

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error('Error fetching products:', error);
    let errorMessage = 'An unknown error occurred';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage });
  }
}
