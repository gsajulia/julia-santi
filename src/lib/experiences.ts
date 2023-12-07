import { EXP_FETCHLY, EXP_SEBRATEC } from "../utils/global";
import { backendTag, designTag, frontendTag, dataScienceTag } from "./tags";
import {
    cssSkill,
    fastApiSkill,
    highchartsSkill,
    htmlSkill,
    javascriptSkill,
    postgresSQLSkill,
    pythonSkill,
    reactNativeSkill,
    reactSkill,
    rubyNrailSkill,
    rubySkill,
    sassSkill,
    styledComponentsSkill,
    typescriptSkill,
} from "./technologies";

export const sebratec = {
    id: EXP_SEBRATEC,
    skills: [
        reactSkill,
        typescriptSkill,
        styledComponentsSkill,
        htmlSkill,
        cssSkill,
        pythonSkill,
        fastApiSkill,
        postgresSQLSkill,
    ],
    role: "Senior Frontend | FullStack Developer",
    companyName: "Sebratec",
    period: "jan. 2023 - Current",
    about: [
        "New features and fix bugs using React, areascript, Python with FastAPI, styled-components following a Figma Design",
        "Align with the Project Manager and Design team",
        "Help Junior devs",
        "ChatGPT API / Parser PDF",
    ],
    tags: [frontendTag, backendTag, dataScienceTag],
};

export const fetchly = {
    id: EXP_FETCHLY,
    skills: [
        reactSkill,
        reactNativeSkill,
        javascriptSkill,
        cssSkill,
        rubySkill,
        postgresSQLSkill,
        rubyNrailSkill,
    ],
    role: "Software Engineer",
    companyName: "Fetchly Labs",
    period: "sep. 2021 - jan. 2023",
    about: [
        "New features and fix bugs using React, React Native, Ruby on Rails, styled-components and MapBox following a Figma Design",
        "Align with the Project Manager, QA and Design team",
        "Make Web and App (Android/IOS) releases",
        "Help Junior devs",
        "Make skillsnical interviews with new devs",
    ],
    tags: [frontendTag, backendTag],
};

export const drakkar = {
    id: EXP_FETCHLY,
    skills: [
        reactSkill,
        javascriptSkill,
        styledComponentsSkill,
        htmlSkill,
        cssSkill,
    ],
    role: "Frontend Developer",
    companyName: "Drakkar",
    period: "mar. 2020 - apr. 2021",
    about: [
        "Lead the Software Team and align with CEO",
        "Manage the progress of devs' tasks",
        "New features and fix bugs using mainly React and styled-components for a KPI based system",
    ],
    tags: [frontendTag, designTag],
};

export const cowmed = {
    id: EXP_FETCHLY,
    skills: [
        reactSkill,
        javascriptSkill,
        highchartsSkill,
        sassSkill,
        htmlSkill,
        cssSkill,
    ],
    role: "Frontend Developer",
    companyName: "COWMED",
    period: "oct. 2018 - oct. 2019",
    about: [
        "Maintain a Cows monitoring system",
        "Migrate the old JQuery code to new React components",
        "Aligning with the team",
    ],
    tags: [frontendTag, designTag],
};
