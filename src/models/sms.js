import mongoose from 'mongoose';

/**
 * Schema for the SMS collection
 */
const SmsSchema = new mongoose.Schema({
  sender: { 
    type: Number,
    required: true,
    ref: 'Contact' 
  },
  receiver: {
    type: Number,
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
