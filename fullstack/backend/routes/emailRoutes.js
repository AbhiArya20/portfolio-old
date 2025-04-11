import express from 'express';
import { sendMessage } from '../controllers/emailControllers';
const router = express.Router();

router.route('/send-message').post(sendMessage);

export default router;
