export function getLatestValue(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr.reduce((prev, current) => {
        return (prev.timestamp > current.timestamp) ? prev : current;
    }).value;
}

export function getHighestValue(arr) {
    let highestValue = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value > highestValue) {
            highestValue = arr[i].value;
        }
    }
    return highestValue;
}