import { TProjectInfo } from "@/types/base";

export interface TProjectsSection {
    activeSection: string;
    projectInfoRandomized?: TProjectInfo | null;
}