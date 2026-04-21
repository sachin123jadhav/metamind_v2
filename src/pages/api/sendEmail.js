// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { subject, text, html, from, name, phone, captcha } = req.body;

    // 🔴 1. Validate captcha exists
    if (!captcha) {
      return res.status(400).json({
        status: "error",
        message: "Captcha is required",
      });
    }

    // 🔴 2. Verify captcha with Google
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify`;

    const captchaRes = await fetch(verifyURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    });

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return res.status(400).json({
        status: "error",
        message: "Captcha verification failed",
      });
    }

    // ✅ 3. Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT == 465, // true for 465, false for 587
      auth: {
        user: process.env.OFFICE_EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // ✅ 4. Email content
    const mailOptions = {
      from: process.env.OFFICE_EMAIL,
      to: process.env.OFFICE_EMAIL,
      subject: subject || "Contact Form",
      text,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${from}</p>
        <p><strong>Message:</strong> ${html || text}</p>
      `,
    };

    // ✅ 5. Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      status: "success",
      message:
        "Thank you! Your message has been sent successfully. We’ll get back to you shortly.",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error sending email",
      error: error.message,
    });
  }
}