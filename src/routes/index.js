import { Router } from 'express';
import SMSController from '../controllers/sms';
import ContactController from '../controllers/contact';
import Auth from '../utilities/auth';

const smsController = new SMSController();
const contactController = new ContactController();
const auth = new Auth();
const router = new Router();

/**
 * Endpoint to signup user
 */
router.post('/signup', contactController.createContact);

/**
 * Endpoint to login user
 */
router.post('/login', contactController.verifyContact);

/**
 * Endpoint to send an SMS
 */
router.post('/:sender/sendSMS', auth.verifyToken, smsController.sendSMS);

/**
 * Endpoint to get details of an SMS
 */
router.get(':smsId/getSMS/', auth.verifyToken, smsController.getSMS);

/**
 * Endpoint to get details of a contact
 */
router.get('/getContact', auth.verifyToken, contactController.getContact);

/**
 * Endpoint to delete a contact
 */
router.delete('/:name/deleteContact', auth.verifyToken, contactController.deleteContact);

export default router;
