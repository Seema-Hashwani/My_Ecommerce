// app/api/users/register/route.ts

import { NextResponse } from 'next/server';
import { connectToDatabase } from './../../../../lib/mongodb';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function POST(request: Request) {
  try {
    const { email, username, password, firstName, lastName, companyName, streetAddress, townCity, postcodeZip, phoneNumber } = await request.json();
    
    console.log('Received data:', { email, username, password, firstName, lastName, companyName, streetAddress, townCity, postcodeZip, phoneNumber });

    // Validate input
    if (!email || !username || !password || !firstName || !lastName || !streetAddress || !townCity || !postcodeZip || !phoneNumber) {
      return NextResponse.json({ success: false, error: 'All fields are required.' });
    }

    const db = await connectToDatabase();
    const collection = db.collection('users');

    // Check for existing email
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, error: 'Email already in use.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log('Inserting into collection:', {
      email,
      username,
      password: hashedPassword, // Use hashed password
      firstName,
      lastName,
      companyName,
      streetAddress,
      townCity,
      postcodeZip,
      phoneNumber,
      createdAt: new Date(),
    });

    const result = await collection.insertOne({
      email,
      username,
      password: hashedPassword, // Store hashed password
      firstName,
      lastName,
      companyName,
      streetAddress,
      townCity,
      postcodeZip,
      phoneNumber,
      createdAt: new Date(),
    });

    console.log('Insert result:', result); // For debugging

    if (result.acknowledged) {
      return NextResponse.json({ success: true, result });
    } else {
      throw new Error('Failed to insert user');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    let errorMessage = 'An unknown error occurred';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage });
  }
}
