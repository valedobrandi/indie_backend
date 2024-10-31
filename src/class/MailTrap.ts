import * as nodemailer from 'nodemailer';

class MailTrap {
 private _transport = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST || "sandbox.smtp.mailtrap.io",
    port: Number(process.env.MAILTRAP_PORT) || 2525,
    auth: {
      user: "8e7fea765b409b",
      pass: process.env.MAILTRAP_TOKEN || ''
    }
  })

  constructor() { }


  async send(email: string, message: string) {
    // send mail with defined transport object
    const info = await this._transport.sendMail({
      from: email, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: message, // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
}

export default MailTrap;
