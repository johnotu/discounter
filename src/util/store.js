const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getData = key => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

const clearData = key => localStorage.clear(key);

export { setData, getData, clearData };