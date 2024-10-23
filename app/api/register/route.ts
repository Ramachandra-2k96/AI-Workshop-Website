import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await client.connect();
    const db = client.db('ai-workshop');
    const collection = db.collection('registrations');

    // Check if registration limit is reached
    const count = await collection.countDocuments();
    if (count >= 70) {
      return NextResponse.json(
        { message: 'Registration Full: The workshop has reached its capacity.' },
        { status: 400 }
      );
    }

    // Check for duplicate registration
    const existing = await collection.findOne({
      $or: [
        { email: body.email },
        { usn: body.usn }
      ]
    });

    if (existing) {
      return NextResponse.json(
        { message: 'You have already registered for the workshop.' },
        { status: 400 }
      );
    }

    // Save registration
    await collection.insertOne({
      ...body,
      registeredAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Registration successful!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'An error occurred during registration.' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}