import { NextApiRequest, NextApiResponse } from 'next';
import emailjs from '@emailjs/browser';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Ensure all fields are provided
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,  // Non-null assertion
        process.env.EMAILJS_TEMPLATE_ID!, // Non-null assertion
        templateParams,
        process.env.EMAILJS_USER_ID!      // Non-null assertion
      );

      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
