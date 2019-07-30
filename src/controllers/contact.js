import mongoose from 'mongoose';
import Contact from '../models/contact';
import SMS from '../models/sms';
import Auth from '../utilities/auth';

const auth = new Auth();

export default class ContactController {
  async createContact(req, res) {
    const { body: { name, phoneNumber, password } } = req;
    const token = auth.generateToken(phoneNumber);
    const contact = await Contact.findOne({ phoneNumber: phoneNumber })
    if (contact) {
      return res.status(201).jsend.success({
        message: 'Phone number already exists, please login instead',
      });
    }
    await Contact.create({
      name: name,
      phoneNumber: phoneNumber,
      password: password,
    });
    return res.status(201).jsend.success({
      message: 'Successfully created contact',
      name: name,
      phoneNumber: phoneNumber,
      token: token,
    });
  }

  async verifyContact(req, res) {
    const { body: { phoneNumber, password } } = req;
    const contact = await Contact.findOne({ phoneNumber: phoneNumber })
    if (contact.password === password) {
      const token = auth.generateToken(phoneNumber);
      return res.status(200).jsend.success({
        message: 'Successfully logged in, you can now send messages',
        token: token
      });
    }
    return res.status(401).jsend.success({
        message: 'Wrong credentials, please try again or signup to create an account',
    });
  }

  async getContact(req, res) {
    const { query: { name } } = req;
    const contact = await Contact.find({ name: name });

    return res.status(200).jsend.success({
      contact
    });
  }

  async deleteContact(req, res) {
    const { params: { name } } = req;
    const contact = await Contact.findOne({ name: name })

    await Contact.remove({ _id: contact._id });
    await SMS.remove({ sender: contact.phoneNumber })

    // return success response
    return res.status(200).jsend.success({
      message: 'Successfully deleted contact',
      name: contact.name,
      phoneNumber: contact.phoneNumber
    });
  }
}
