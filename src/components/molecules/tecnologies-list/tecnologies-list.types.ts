import { TSkill } from "@/app/models/base";

export interface TTecnologiesList {
    currentTechnology?: TSkill;
    technologies: TSkill[];
    onTechnologyClick: (technology: TSkill) => void;
}
