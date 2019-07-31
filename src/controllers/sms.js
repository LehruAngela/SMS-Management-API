import mongoose from 'mongoose';
import SMS from '../models/sms';

export default class SMSController {
  async sendSMS(req, res) {
    const { params: { sender }, body: { receiver, message } } = req;

    // create SMS record in collection
    await SMS.create({
      sender: sender,
      receiver: receiver,
      message: message,
      status: 'sent',
    });

    // return success response
    return res.status(201).jsend.success({
      sender: sender,
      receiver: receiver,
      message: message,
      status: 'sent'
    });
  }

  async getSMS(req, res) {
    const { params: { smsId } } = req;
    const sms = await SMS.findOne({ _id: smsId });

    // return success response
    return res.status(200).jsend.success({
      sender: sms.sender,
      receiver: sms.receiver,
      message: sms.message,
      status: sms.status,
    });
  }
}
