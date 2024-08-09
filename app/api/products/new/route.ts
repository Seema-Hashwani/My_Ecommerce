// app/api/products/new/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const { name, price, image, quantity } = await request.json();
    
    console.log('Received data:', { name, price, image, quantity });

    // Validate the input
    if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
      console.error('Validation failed:', { price, quantity });
      return NextResponse.json({ success: false, error: 'Invalid input' });
    }

    const db = await connectToDatabase();
    const collection = db.collection('products');

    console.log('Inserting into collection:', {
      name,
      price,
      image,
      quantity,
      createdAt: new Date(),
    });

    const result = await collection.insertOne({
      name,
      price,
      image,
      quantity,
      createdAt: new Date(),
    });

    console.log('Insert result:', result); // For debugging

    if (result.acknowledged) {
      return NextResponse.json({ success: true, result });
    } else {
      throw new Error('Failed to insert product');
    }
  } catch (error) {
    console.error('Error inserting product:', error);
    let errorMessage = 'An unknown error occurred';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage });
  }
}
