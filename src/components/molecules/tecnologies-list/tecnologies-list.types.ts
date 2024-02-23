import { TSkill } from "@/types/base";

export interface TTecnologiesList {
    currentTechnology?: TSkill;
    technologies: TSkill[];
    onTechnologyClick: (technology: TSkill) => void;
}
