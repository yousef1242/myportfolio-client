import request from "./request";

const fetchProjects = async () => {
  try {
    const { data } = await request("/api/v2/projects");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProjects;
