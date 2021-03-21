export class Education {
    _id?:string;
    username:string;
    language: string;
    start_year: number;
    end_year: number;
    diploma: string;
    description: string;
    link: string;
    constructor(username:string, language: string, start_year: number, end_year: number, diploma: string, description: string, link: string){
        this.username = username;
        this.language = language;
        this.start_year = start_year;
        this.end_year = end_year;
        this.diploma = diploma;
        this.description = description;
        this.link = link;
    }
}