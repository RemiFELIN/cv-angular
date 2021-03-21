export class User {
    _id?:string;
    username: string;
    password: string;
    constructor(username, password){
      this.username = username;
      this.password = password;
    }
  }