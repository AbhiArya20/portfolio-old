import { createHtmlTemplate, emailService } from '../services/email_service';

export const sendMessage = async (req, res) => {
  try {
    const { fullName, phone, email, extra } = req.body;
    if (!fullName || !phone || !email || !extra) {
      return res.status(400).json({ message: 'All Field are required' });
    }

    await emailService.sendEmailHtml(
      'careers.abhishekkumar@gmail.com',
      `Portfolio Request: ${fullName}`,
      createHtmlTemplate(
        'Abhishek Kumar',
        fullName,
        `<p>You have new request from <b>${fullName}</b> on your portfolio. you can find complete details below.</p>
        </br>

        <p><b>Message:</b> ${extra}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <div class="button-wrapper">
          <a href='tel:${phone}' class='cta-button' style="color:white;">Call</a>
          <a href='mailto:${email}' class='cta-button' style="color:white;">Email</a>
        </div>
      `
      )
    );
    await emailService.sendEmailHtml(
      email,
      'Request:Abhishek Kumar portfolio',
      createHtmlTemplate(
        fullName,
        'Abhishek Kumar',
        `<p>Thank you for reaching out to me. I appreciate your interest and look forward to assisting you further.</p>
          <p>I will get back to you as soon as possible. You can expect to hear from me either via email or phone call.</p>
          <p>If you need immediate response, please feel free to call or whatsapp</p>
          <div class="button-wrapper">
          <a href='tel:+91 9162388695' class='cta-button' style="color:white;">Call</a>
          <a href='https://wa.me/919162388695?text=Hey,%20Abhishek%20%0AWe/I%20want%20to%20hire%20you%20for%20a%20project' class='cta-button' style="color:white;">Whatsapp</a>
          </div>
          <p>Thank you once again for contacting us. I value your communication and will be in touch soon.</p>
        `
      )
    );
    return res.status(200).json({ message: 'Email send success' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
};
