export const getAllGithubRepos = async (query = "") => {
    const response = await fetch(
        `https://api.github.com/users/gsajulia/repos?${query}`
    );
    return await response.json();
};

export const getRepoFiles = async (name: string, path: string) => {
    const response = await fetch(
        `https://api.github.com/repos/gsajulia/${name}/contents/${path}`
    );
    return await response.json();
};