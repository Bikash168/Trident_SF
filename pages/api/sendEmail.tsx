import EmailJS from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    try {
      await EmailJS.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your user ID
      );
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
