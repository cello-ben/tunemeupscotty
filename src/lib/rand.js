export function getRandomInRange(low, high) {
    const r = Math.floor(Math.random() * 49);
    return (r % (high + 1 - low)) + low;
};