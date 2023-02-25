const catchAsync = require("../utils/catchAsync");
exports.sendEmail = catchAsync(async (req, res, next) => {
    // send email with contact
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 465,
      secure: true,
      auth: {
        user: 'username',
        pass: 'password'
      }
    });
    
    exports.sendEmail = async (req, res) => {
      const { name, email, message } = req.body;
    
      try {
        const info = await transporter.sendMail({
          from: '"My Website" <info@mywebsite.com>',
          to: 'contact@mywebsite.com',
          subject: `New message from ${name} (${email})`,
          text: message
        });
        console.log('Message sent: %s', info.messageId);
        res.sendStatus(200);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
    };
    
});
