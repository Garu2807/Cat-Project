import { Cat } from './types/Cat';

export const getCats = async (): Promise<Cat[]> => {
  const response = await fetch('http://localhost:4000/api/cats');
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
};
