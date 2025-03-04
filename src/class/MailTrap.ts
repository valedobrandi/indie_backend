import * as nodemailer from 'nodemailer';
import * as fs from 'fs';

class MailTrap {
 private _transport = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST || "live.smtp.mailtrap.io",
    port: Number(process.env.MAILTRAP_PORT) || 2525,
    auth: {
      user: "api",
      pass: fs.readFileSync("/run/secrets/mailtrap_token_secret", 'utf8').trim() || 'token'
    }
  })

  constructor() { }


  async send(email: string, message: string) {
    // send mail with defined transport object
    const info = await this._transport.sendMail({
      from: "contact@stoicsoftwares.net", // sender address
      to: "bernardoramosdev@gmail.com", // list of receivers
      subject: email, // Subject line
      text: message, // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);
  }
}

export default MailTrap;
