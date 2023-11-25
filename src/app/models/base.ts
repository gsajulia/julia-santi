export interface TTags {
    id: number;
    title: string;
    color: string;
}

export interface TSkill {
    id: number;
    label: string;
    image: string;
    description: string;
}

export interface TExperience {
    id: number;
    skills: TSkill[];
    role: string;
    companyName: string;
    period: string;
    about: string[];
    tags: TTags[];
}
