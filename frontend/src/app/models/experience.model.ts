export class Experience {
    _id?:string;
	id: Number;
    language: string;
    start_period: string;
    end_period: string;
    title: string;
    assignments: [{
        title: string;
        description: string;
        technologies: [string]
    }]
  }