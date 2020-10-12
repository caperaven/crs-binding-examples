export function getData() {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push({
            title: `item ${i}`
        })
    }
    return result;
}