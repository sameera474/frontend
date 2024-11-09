import axios from "axios";

const API_URL = "http://localhost:5000/api/lawn-data";

export const getLawnData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addLawnData = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};
