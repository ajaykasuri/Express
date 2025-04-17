const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, services, company, message } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !services ||
    !company ||
    !message
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    console.log("Invalid email format:", email);
    return res.status(400).json({ error: "Invalid email format" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
    // debug: true,
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Services: ${services}
      Message: ${message}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Email not sent", details: error.message });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
