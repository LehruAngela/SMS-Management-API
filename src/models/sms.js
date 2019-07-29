import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

/**
 * Schema for the SMS collection
 */
const SmsSchema = new mongoose.Schema({
  sender: { 
    type: ObjectId,
    required: true,
    ref: 'Contact' 
  },
  receiver: {
    type: ObjectId,
    required: true,
    ref: 'Contact',
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const SMS = mongoose.model('SMS', SmsSchema);

export default SMS;
