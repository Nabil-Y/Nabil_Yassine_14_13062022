/**
 * getFromLocalStorage Helper Function
 * @param key Local Storage Key
 * @returns JSON.parsed value of key or empty string
 */
export const getFromLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : "";
};
