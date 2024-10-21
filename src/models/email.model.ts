import SequelizeEmail from '../database/models/SequelizeEmails';
import { IEmailModel } from '../Interfaces/emails/IEmailModel';

export default class EmailModel implements IEmailModel {
  private model = SequelizeEmail;

  async register(email: string): Promise<null> {
    await this.model.create({ email });
    return null;
  }

  async countSubscript(): Promise<number> {
    const response = await this.model.count();
    return response;
  }
}
