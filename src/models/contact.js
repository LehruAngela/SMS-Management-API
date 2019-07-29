import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

/**
 * Schema for the Contact collection
 */
const ContactSchema = new mongoose.Schema({
  name: { 
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const Contact = mongoose.model('Sms', ContactSchema);

export default Contact;
