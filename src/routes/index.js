import { Router } from 'express';
import SMSController from '../controllers/sms';
import ContactController from '../controllers/contact';

const smsController = new SMSController();
const contactController = new ContactController();
const router = new Router();

/**
 * Endpoint to send an SMS
 */
router.post('/sendSMS', smsController.sendSMS);

/**
 * Endpoint to get details of an SMS
 */
router.get('/getSMS', smsController.getSMS);

/**
 * Endpoint to get details of an SMS
 */
router.get('/getSMS', smsController.getSMS);

/**
 * Endpoint to get details of a contact
 */
router.get('/getContact', contactController.getContact);

/**
 * Endpoint to delete a contact
 */
router.get('/deleteContact', contactController.deleteContact);

export default router;
