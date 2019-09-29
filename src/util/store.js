const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getData = key => JSON.parse(localStorage.getItem(key));

const clearData = key => localStorage.clear(key);

export { setData, getData, clearData };