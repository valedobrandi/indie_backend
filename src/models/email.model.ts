import SequelizeEmail from '../database/models/SequelizeEmails';
import { IEmailModel } from '../Interfaces/emails/IEmailModel';

export default class EmailModel implements IEmailModel {
  private model = SequelizeEmail;

  async register(email: string): Promise<null> {
    try {
      await this.model.create({ email });
      return null;
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async countSubscript(): Promise<number> {
    try {
      const response = await this.model.count();
      return response;
    } catch (error) {
      console.log(error)
      return 0
    }
  }
}
