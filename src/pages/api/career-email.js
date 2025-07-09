import { IncomingForm } from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res
          .status(400)
          .json({ message: "Error parsing form data", status: 400 });
      }

      console.log("Fields received:", fields); // Log fields to check if subject is present
      const { subject, text, from, name, phone, position } = fields;
      const file = files.attachment;

      if (!subject || !text || !from || !name || !position) {
        return res
          .status(400)
          .json({ message: "Missing required fields", status: 400 });
      }

      try {
        const transporter = nodemailer.createTransport({
          host: process.env.HOST,
          port: parseInt(process.env.EMAIL_PORT, 10),
          secure: process.env.EMAIL_PORT === "465",
          auth: {
            user: process.env.OFFICE_EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        const emailHtml = `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${from}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Message:</strong> ${text}</p>
        `;

        const emailText = `
Name: ${name}
Email: ${from}
Phone: ${phone || "Not provided"}
Position: ${position}
Message: ${text}
 subject: "appication For" ${position},
        `;

        const mailOptions = {
          from: `"${name}" <${from}>`,
          to: process.env.OFFICE_EMAIL,
          // subject: subject || "Career Form", // Ensure subject is passed here
          text: emailText,
          html: emailHtml,
          subject: `Application For ${position}`,
        };

        if (file) {
          mailOptions.attachments = [
            {
              filename: file[0].originalFilename,
              path: file[0].filepath,
            },
          ];
        }

        const info = await transporter.sendMail(mailOptions);

        return res
          .status(200)
          .json({ message: "Email sent successfully", status: 200, info });
      } catch (error) {
        console.error("Error sending email:", error);
        return res
          .status(500)
          .json({ message: "Error sending email", status: 500, error });
      }
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed", status: 405 });
  }
}
