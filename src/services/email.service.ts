import EmailModel from '../models/email.model';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IEmailModel } from '../Interfaces/emails/IEmailModel';
import Subscribe from '../class/Subscribe';

export default class EmailService {
  constructor(
    private emailModel: IEmailModel = new EmailModel(),
    private subscribe = new Subscribe(),
  ) {}

  async subscribes(): Promise<ServiceResponse<{ message: number }>> {
    const numberSubscribe = await this.emailModel.countSubscript();
    return { status: 'CREATED', data: { message: numberSubscribe } };
  }

  async sendEmail(email: string, message: string): Promise<ServiceResponse<{ message: string }>> {
    this.subscribe.sendEmail('indiepage subscribe', message, email);

    const register = await this.emailModel.register(email);
    if (register) {
      return { status: 'CREATED', data: { message: 'email sent / registered' } };
    }
    return { status: 'UNPROCESSABLE CONTENT', data: { message: 'can`t register' } };
  }
}
