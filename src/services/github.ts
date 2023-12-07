export const getAllGithubRepos = async (query = "") => {
    const response = await fetch(
        `https://api.github.com/users/gsajulia/repos?${query}`
    );
    return await response.json();
};

export const getAllLanguagesByRepo = async (name: string) => {
    const response = await fetch(
        `https://api.github.com/users/gsajulia/repos/${name}/languages`
    );
    return await response.json();
};

export const getAllRepositoriesByLanguage = async () => {
    const response = await fetch(
        "https://api.github.com/search/repositories?q=user:gsajulia+language:javascript+language:typescript+language:python+language:ruby+language:r"
    );
    return await response.json();
};
