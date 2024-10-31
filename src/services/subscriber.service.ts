import SubscriberModel from '../models/subscriber.model';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ISubscriberModel } from '../Interfaces/subscriber/ISubscriberModel';
import MailTrap from '../class/MailTrap';

export default class subscriberEmailService {
  constructor(
    private subscriberModel: ISubscriberModel = new SubscriberModel(),
    private subscribe = new MailTrap(),
  ) { }

  async countSubscribes(): Promise<ServiceResponse<{ message: number }>> {

    const numberSubscribe = await this.subscriberModel.countSubscript();

    return { status: 'SUCCESSFUL', data: { message: numberSubscribe } };
  }

  async sendEmail(email: string, message: string): Promise<ServiceResponse<{ message: string }>> {
    const send = this.subscribe.send(email, message);
    
    const find = await this.subscriberModel.find(email);

    if (find) return { status: 'OK', data: { message: 'Message Sent' } };

    const register = await this.subscriberModel.register(email);

    if (register) return { status: 'CREATED', data: { message: 'Subscribed' } };
    
    return { status: 'UNPROCESSABLE_CONTENT', data: { message: 'Subscribed Fail' } };
  }
}
