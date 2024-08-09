import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../lib/mongodb';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('products');

    // Fetch 4 random products
    const products = await collection.aggregate([{ $sample: { size: 4 } }]).toArray();

    console.log('Fetched products:', products); // Debugging line

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
