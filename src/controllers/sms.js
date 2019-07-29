import mongoose from 'mongoose';
import SMS from '../models/sms';

export default class SMSController {
  async sendSMS(req, res) {
    const { body: { card, employeeId } } = req;
  }

  async getSMS(req, res) {
    const { params: { smsId } } = req;
    const sms = await SMS.findOne({ _id: smsId });

    // return success response
    return res.status(status).jsend.success({
      status,
      success: true,
      sender: sms.sender,
      receiver: sms.receiver,
      message: sms.message,
      status: sms.status,
    });
  }
}
