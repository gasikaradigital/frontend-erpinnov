const sendMail = require('../utils/sendEmail');

const contactController = {
  sendEmail: (req, res) => {
    const { name, email, message } = req.body;
    sendMail(name, email, message);
    res.status(200).json({ message: 'Email sent successfully' });
  }
};

module.exports = contactController;
