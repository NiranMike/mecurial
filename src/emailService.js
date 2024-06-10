import axios from 'axios';

const API_KEY = 're_SNJSxYpC_AQQFEpqbg7tnTprEGBZg3m53';

const sendEmail = async ({ to, subject, html }) => {
  try {
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: "onyedikachukwujosephjmc@gmail.com",
        to,
        subject,
        html,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
