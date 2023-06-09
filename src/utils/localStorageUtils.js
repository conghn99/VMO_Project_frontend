export const setDataToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
} 

export const getDatatFromLocalStorage = (key) => {
    const localStorageValue = localStorage.getItem(key)
    if (localStorageValue !== null) {
        return JSON.parse(localStorageValue)
    }

    return null;
}