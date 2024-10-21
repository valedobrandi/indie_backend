export interface IEmailModel {
  register(email: string): Promise<null>;
  countSubscript(): Promise<number>
}
