import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

// Database URI and name
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'test';  // Updated to 'cph'

const client = new MongoClient(uri);

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ success: false, error: 'Product ID is required' }, { status: 400 });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('products');

    // Convert string to ObjectId
    const objectId = new ObjectId(id);

    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
