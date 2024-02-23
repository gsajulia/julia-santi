import { TExperience } from "@/types/base";
import { Dispatch, SetStateAction } from "react";

export interface TIntroductionSection {
    activeSection: string;
    handleSectionClick: (section: string) => void
}
