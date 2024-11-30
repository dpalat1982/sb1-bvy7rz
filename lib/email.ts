import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@tisknamajice.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function sendQuoteRequestEmail(data: {
  name: string;
  email: string;
  phone: string;
  quantity: string;
  description: string;
}) {
  const mailOptions = {
    from: 'info@tisknamajice.com',
    to: 'info@tisknamajice.com',
    subject: 'Novo povpraševanje za tisk na majice',
    html: `
      <h2>Novo povpraševanje</h2>
      <p><strong>Ime in priimek:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Količina:</strong> ${data.quantity}</p>
      <p><strong>Opis projekta:</strong></p>
      <p>${data.description}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}