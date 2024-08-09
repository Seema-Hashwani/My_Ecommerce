// app/api/users/login/route.ts

import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../../lib/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const db = await connectToDatabase();
    const collection = db.collection('users');

    // Find user by email
    const user = await collection.findOne({ email });
    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return NextResponse.json({ 
        success: true, 
        username: user.username // Ensure username is included
      });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    let errorMessage = 'An unknown error occurred';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage });
  }
}
