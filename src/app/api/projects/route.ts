import {ProjectName} from "../../../types/projectNames"

export const getProjectName = async (userName: string): Promise<ProjectName[]> => {
    const url = `https://api.github.com/users/${userName}/repos`;

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Name');
  }
  return res.json();
};


export const getProjectLanguages = async (userName: string, userRepo: string): Promise<ProjectName[]> => {
    const url = `https://api.github.com/repos/${userName}/${userRepo}/languages`;

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch rocket');
  }
  return res.json();
};
