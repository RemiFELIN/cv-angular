import { Testimonial } from "./testimonial.model";
import { Work } from "./work.model";
import { Workflow } from "./workflow.model";

export class AboutMe {
    _id?:string;
    username:string;
    langue: string;
    presentation: string;
    works: Work[];
    workflow: Workflow[];
    testimonials: Testimonial[];
    clients: string[];
}