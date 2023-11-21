import nodemailer from "nodemailer";

const sendEmailToOwner = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.OWNER_EMAIL, // Your email address
    subject: `Message from ${name}: ${subject}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send("Error sending email");
  }
};

export { sendEmailToOwner };
