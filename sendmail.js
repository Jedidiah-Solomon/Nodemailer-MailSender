const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

// Define mail options
const mailOptions = {
  from: {
    name: "Bathphage ICT Center Itamaga",
    address: process.env.USER,
  }, // sender address
  to: ["jedybrown9821@gmail.com", "3rdmenreal@gmail.com"], // list of receivers
  replyTo: "another-email@gmail.com", // Reply-To address
  subject: "Happy New Month Our  Customer | Bathphage ICT Center ✔", // Subject line
  text: "Happy new month to all our customers. God bless you", // plain text body
  html: "<b>Happy new month to all our customers. God bless you</b>", // html body
  cc: "jedybrownventures@getMaxListeners.com",
  bcc: "jedybrownventures@getMaxListeners.com",
  attachments: [
    {
      filename: "certificate-jedy.pdf",
      path: path.join(__dirname, "certificate-jedy.pdf"),
      contentType: "application/pdf",
    },
    {
      filename: "visa.png",
      path: path.join(__dirname, "visa.png"),
      contentType: "image/png",
    },
  ],
};

// Function to send mail
const sendMailTOCustomers = async (transporter, mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `The email has been sent successfully!!! Message sent: ${info.messageId}`
    );
  } catch (error) {
    console.error(error);
  }
};

sendMailTOCustomers(transporter, mailOptions);
