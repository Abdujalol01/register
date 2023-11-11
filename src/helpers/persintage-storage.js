export const setItem = (key, data) => {
  return localStorage.setItem(key, data);
};

export const getItem = (key) => {
  return localStorage.getItem(key);
};

export const removeItem = (key) => {
  return localStorage.removeItem(key);
};
