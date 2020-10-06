export function createRectangles(count) {
    const rectangles = [];
    const height = 24;
    const padding = 10;
    let y = 0;

    for (let i = 0; i < count; i++) {
        rectangles.push({
            x: 0,
            y: y,
            width: 100,
            height: height
        })

        y = y + height + padding;
    }
    return rectangles;
}