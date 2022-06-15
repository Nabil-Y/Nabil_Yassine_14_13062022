import { useState } from "react";

/**
 * useLocalStorage Custom Hook:
 * Allows usage of local storage with value and setter function like useState
 * @param key Key to set in local storage
 * @param initialValue Initial value of key
 * @returns [ local storage value, setter function ]
 */
const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
