export function saveToStorage(reservations) {
    console.log({reservations})
    window.localStorage.setItem('reservations', JSON.stringify(reservations));
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('reservations');
}