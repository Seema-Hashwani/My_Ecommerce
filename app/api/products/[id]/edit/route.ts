import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'cph';

const client = new MongoClient(uri);

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ success: false, error: 'Product ID is required' }, { status: 400 });
  }

  const { name, price, quantity, image } = await request.json();

  if (!name || price === undefined || quantity === undefined || !image) {
    return NextResponse.json({ success: false, error: 'All product fields are required' }, { status: 400 });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('products');

    // Convert id to ObjectId if valid
    const objectId = ObjectId.isValid(id) ? new ObjectId(id) : null;

    if (!objectId) {
      return NextResponse.json({ success: false, error: 'Invalid Product ID' }, { status: 400 });
    }

    const result = await collection.updateOne(
      { _id: objectId },
      { $set: { name, price, quantity, image } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, error: 'No changes made' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
