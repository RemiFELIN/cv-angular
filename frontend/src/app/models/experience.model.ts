export class Experience {
    _id?:string;
	username: string;
    language: string;
    start_period: string;
    end_period: string;
    title: string;
    description: string;
    link: string;
    assignments;
    constructor(username: string, language: string, start_period: string, end_period: string, title: string, description: string, link: string){
        this.username = username;
        this.language = language;
        this.start_period = start_period;
        this.end_period = end_period;
        this.title = title;
        this.description = description;
        this.link = link;
        this.assignments = null;
    }
  }