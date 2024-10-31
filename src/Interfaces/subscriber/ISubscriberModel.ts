import SequelizeSubscriber from "../../database/models/SequelizeSubscriber";

export interface ISubscriberModel {
  register(email: string): Promise<SequelizeSubscriber | null>;
  countSubscript(): Promise<number>;
  find(email: string): Promise<SequelizeSubscriber | null>;
}
