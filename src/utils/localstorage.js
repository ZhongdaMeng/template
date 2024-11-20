// 设置本地缓存
const localStorageSet = (key, val) => {
    window.localStorage.setItem(key, JSON.stringify(val));
}

// 获取本地缓存
const localStorageGet = (key) => {
    const json = window.localStorage.getItem(key);
    return (json === null) ? null : JSON.parse(json)
}

// 移除本地缓存
// 移除永久缓存
const localStorageRemove = (key) => {
    window.localStorage.removeItem(key);
}

// 移除全部本地缓存
const localStorageClear = () => {
    window.localStorage.clear();
}

export { localStorageSet, localStorageGet, localStorageRemove, localStorageClear }