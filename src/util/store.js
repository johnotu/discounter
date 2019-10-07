const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getData = key => {
  if (localStorage.getItem(key) !== undefined) return JSON.parse(localStorage.getItem(key));
  return null;
}

const clearData = key => localStorage.clear(key);

export { setData, getData, clearData };