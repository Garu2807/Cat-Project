import { Cat } from './types/Cat';

export const getCats = async (): Promise<Cat[]> => {
  const response = await fetch('http://localhost:4200/api/cats');
  const data = await response.json();
  console.log(data);
  return data;
};
