// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Destructure the request body
    const { subject, text, html, from, name, phone } = req.body;
    console.log(
      "subject, text, html, from, name, phone",
      subject,
      text,
      html,
      from,
      name,
      phone
    );
    // Set up the SMTP transporter using your credentials
    const transporter = nodemailer.createTransport({
      host: process.env.HOST, // Replace with your SMTP server host
      port: process.env.EMAIL_PORT, // Replace with your SMTP server port (use 587 for TLS)
      secure: true, // Use true for SSL (465 port)
      auth: {
        user: process.env.OFFICE_EMAIL, // Replace with your SMTP username
        pass: process.env.PASSWORD, // Replace with your SMTP password
      },
    });
    console.log("transporter", transporter);
    // Set up the email data
    const mailOptions = {
      from,
      to: process.env.OFFICE_EMAIL,
      subject,
      text,
      html,
      // name,
      // phone,
    };
    console.log("mailOptions", mailOptions);

    try {
      // Send the email``
      console.log("at try");
      const info = await transporter.sendMail(mailOptions);
      console.log("info", info);
      res.status(200).json({
        message: "Email sent",
        status: 200,
      });
    } catch (error) {
      console.log("at catch", error);
      res.status(500).json({
        message: "Error sending email",
        status: 400,
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
