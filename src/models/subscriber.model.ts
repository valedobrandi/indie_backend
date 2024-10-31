import SequelizeSubscriber from '../database/models/SequelizeSubscriber';
import { ISubscriberModel } from '../Interfaces/subscriber/ISubscriberModel';

export default class SubscriberModel implements ISubscriberModel {
  private model = SequelizeSubscriber;

  async register(email: string): Promise<SequelizeSubscriber | null> {
    try {
      const response = await this.model.create({ email });
      return response;
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async find(email: string): Promise<SequelizeSubscriber | null> {
    try {
      const response = await this.model.findOne({ where: { email } });
      return response;
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
