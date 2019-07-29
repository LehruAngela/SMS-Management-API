import mongoose from 'mongoose';
import Contact from '../models/contact';

export default class ContactController {
  async getContact(req, res) {
    const { params: { contactId } } = req;
    const contact = await Contact.findOne({ _id: contactId });

    return res.status(status).jsend.success({
      status,
      success: true,
      sender: sms.sender,
      receiver: sms.receiver,
      message: sms.message,
      status: sms.status,
    });
    // return success response
    return res.status(status).jsend.success({
      status,
      success: true,
      name: contact.name,
      phone: contact.phone,
    });
  }

  async deleteContact(req, res) {
    const { params: { contactId } } = req;
    const contact = await Contact.deleteOne({ _id: contactId });

    // return success response
    return res.status(status).jsend.success({
      status,
      success: true,
    });
  }
}
