import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import FeedbackModel from '@/model/Feedback';

export async function POST(request: Request) {
  // Connect to MongoDB
  await dbConnect();

  try {
    // Parse request body
    const { name, email, feedback } = await request.json();

    // Basic validation
    if (!name || !email || !feedback) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create a new feedback document
    const newFeedback = await FeedbackModel.create({
      name,
      email,
      feedback,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Feedback submitted successfully',
        feedback: newFeedback,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting feedback' },
      { status: 500 }
    );
  }
}
