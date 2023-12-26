const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "thakurrout69@gmail.com",
        pass: "dnyt oqzv ipse cela",
      },
    });

    const { from, to, subject, text } = req.body;
    const mailOptions = {
      from,
      to,
      subject,
      text,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Mail Delivered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred while sending email",
      error: error.message,
    });
  }
};

module.exports = sendMail;
