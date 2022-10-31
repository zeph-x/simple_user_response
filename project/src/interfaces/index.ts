
export class BaseHandler {
  public stringify(obj: any): string {
    return JSON.stringify(obj);
  }
}


export interface IUser {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}
