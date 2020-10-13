import {getRandomNumber} from "./../_utils/utils.js";

export function getData() {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push({
            title: `item ${i}`
        })
    }
    return result;
}

export function getPaths(count, pointCount, min, max, color) {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push({
            pathData: getRandomPath(pointCount, min, max),
            stroke: color || "black",
            width: getRandomNumber(1,4)
        });
    }

    return result;
}

function getRandomPath(count, min, max) {
    const path = ["M0,300"];
    const offset = 500 / count;

    for (let i = 1; i < count; i++) {
        path.push(`L${i * offset},${getRandomNumber(min, max)}`);
    }

    return path.join(" ");
}