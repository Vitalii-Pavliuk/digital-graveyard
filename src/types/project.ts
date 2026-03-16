export interface Comment {
  commentator: string;
  comment: string;
}

export interface Project {
  _id: string;
  projectName: string;
  userName: string;
  gitHubUrl: string;
  epitaph: string;
  languages: string[];
  description: string;
  causeOfDeath: string;
  diedAt: Date;
  candles?: string[];          
  condolence?: Comment[];    
}


export interface User {
  _id: string;
  name: string;
  email: string;
}