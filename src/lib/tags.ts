// Area types

const FRONTEND = 1;
const DATA_SCIENCE = 2;
const BACKEND = 3;
const DESIGN = 4;

// Status types

const WORK_IN_PROGRESS = 5;

export const frontendTag = {
    id: FRONTEND,
    title: "Frontend",
    color: "#FB87FD",
};
export const backendTag = { id: BACKEND, title: "Backend", color: "#5CE1E6" };

export const dataScienceTag = {
    id: DATA_SCIENCE,
    title: "Data Science",
    color: "#e57373",
};

export const designTag = { id: DESIGN, title: "Design", color: "pink" };

export const constructionTag = {
    id: WORK_IN_PROGRESS,
    title: "Work in progress",
    color: "#ffcb6b",
};
