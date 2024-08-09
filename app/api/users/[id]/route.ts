import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI; // Fetch connection string from environment variables
if (!uri) throw new Error('MongoDB connection string is not defined');
const client = new MongoClient(uri);

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await client.connect();
    const database = client.db('cph'); // Database name
    const users = database.collection('users');

    console.log(`Attempting to delete user with ID: ${id}`);

    const result = await users.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      console.error('User not found');
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    console.log('User deleted successfully');
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error deleting user: ${error.message}`);
      return NextResponse.json({ error: `Failed to delete user: ${error.message}` }, { status: 500 });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
  } finally {
    await client.close();
  }
}
