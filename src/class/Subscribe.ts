import { MailtrapClient } from 'mailtrap';

class Subscribe {
  private _client: MailtrapClient;

  constructor() {
    this._client = new MailtrapClient({
      token: process.env.MAILTRAP_TOKEN || '',
      testInboxId: 3140061,
    });
  }

  async sendEmail(
    subject: string,
    message: string,
    email: string,
    category = 'Integration Test',
  ) {
    const messageToSend = {
      from: { email },
      to: [{ email: 'valedobrandi@gmail.com' }],
      subject,
      text: message,
      category,
    };

    this._client.testing.send(messageToSend);
  }
}

export default Subscribe;
