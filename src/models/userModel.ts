import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    age: { type: Number, required: true }
  },
  { timestamps: true }
);

// Compound index example (for aggregation/filtering)
userSchema.index({ age: 1, name: 1 });

export const User = mongoose.model<IUser>('User', userSchema);
