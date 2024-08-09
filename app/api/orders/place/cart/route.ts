import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../../../lib/mongodb';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get('username');

    if (!username) {
      return NextResponse.json({ success: false, error: 'Username is required.' });
    }

    const db = await connectToDatabase();
    const collection = db.collection('carts');
    const cart = await collection.findOne({ username });

    if (cart) {
      return NextResponse.json({ success: true, cart: cart.items });
    } else {
      return NextResponse.json({ success: true, cart: [] });
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ success: false, error: errorMessage });
  }
}

export async function POST(request: Request) {
  try {
    const { username, items } = await request.json();

    if (!username || !items) {
      return NextResponse.json({ success: false, error: 'Username and items are required.' });
    }

    const db = await connectToDatabase();
    const collection = db.collection('carts');
    
    await collection.updateOne(
      { username },
      { $set: { items } },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating cart:', error);
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
