const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getData = key => typeof localStorage.getItem(key) === undefined || typeof localStorage.getItem(key) === null ? null :  JSON.parse(localStorage.getItem(key));

const clearData = key => localStorage.clear(key);

export { setData, getData, clearData };