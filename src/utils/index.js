import nodemailer from 'nodemailer';

const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD } = process.env;

export const sendEmail = ({ emailToSend, subject, text }) => {
  var transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: EMAIL_USER,
    to: emailToSend,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
