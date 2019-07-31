import mongoose from 'mongoose';

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
  password: {
    type: String,
    required: true,
  }
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
