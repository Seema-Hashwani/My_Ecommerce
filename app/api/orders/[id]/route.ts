import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await client.connect();
    const database = client.db('cph'); // Replace 'cph' with your database name
    const orders = database.collection('orders');

    // Delete the order by its ID
    const result = await orders.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
  } finally {
    await client.close();
  }
}
