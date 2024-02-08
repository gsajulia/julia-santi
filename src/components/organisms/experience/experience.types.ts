import { TExperience } from "@/models/base";
import { Dispatch, SetStateAction } from "react";

export interface TExperienceNavigation {
    experiences: TExperience[]
    currentExperience: number;
    setCurrentExperience: Dispatch<SetStateAction<number>>
}
