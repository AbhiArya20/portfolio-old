import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const createHtmlTemplate = (receiverName, senderName, message) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }
      h2 {
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        color: #444;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        margin: 10px 0;
        color: #555;
      }
      .button-wrapper{
        display:flex;
        flex-wrap:wrap;
      }
      .cta-button {
        display: inline-block;
        text-decoration: none;
        background-color: hsl(333deg, 100%, 52%);
        color: gray;
        padding: 15px 25px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        margin: 20px 10px;
        margin-left: 0;
        text-align: center;
        transition: background 0.3s ease;
      }
      .cta-button:hover {
        background-color: hsl(333, 100%, 63%);
      }
      .name {
        text-transform: capitalize;
        font-weight: bold;
        color: #333;
      }
      .message {
        margin: 20px 0;
      }
      h3 {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p class="name">Hi, ${receiverName}</p>
      <div class="message">${message}</div>
      <div>
        <h3>Regards</h3>
        <h3>${senderName}</h3>
      </div>
    </div>
  </body>
  </html>`;
};

class EmailServices {
  constructor() {
    this.senderEmail = process.env.EMAIL;
    this.senderPassword = process.env.PASS;

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: this.senderEmail,
        pass: this.senderPassword
      }
    });
  }

  async sendEmailHtml(recipient, subject, html) {
    this.transporter.sendMail({
      from: '"Portfolio-Abhishek" <portfolio.abhishekkumar@gmail.com>',
      to: recipient,
      subject,
      html
    });
  }
}

const emailService = new EmailServices();
export { emailService };
