export function saveToStorage(reservations) {
    console.log({reservations})
    window.localStorage.setItem('reservations', JSON.stringify(reservations));
}

export const clearStorage = () => {
    window.localStorage.removeItem('reservations');
}