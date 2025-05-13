import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedback extends Document {
  name:string;
  email: string;
  feedback: string;
  createdAt: Date;
}

const FeedbackSchema: Schema<IFeedback> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
        default: Date.now,
    },
  }
);

const FeedbackModel = mongoose.models.Feedback || mongoose.model<IFeedback>('Feedback', FeedbackSchema);
export default FeedbackModel;