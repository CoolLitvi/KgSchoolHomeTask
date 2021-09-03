function solveQuadraticEquation(a, b, c) {
    const d = Math.pow(b, 2) - (4 * a * c);

    if (d > 0) {
        const x1 = ((-b) + Math.sqrt(d)) / 2 * a;
        const x2 = ((-b) - Math.sqrt(d)) / 2 * a;
        return [x1, x2];
    } else if (d === 0) {
        return (-b) / (2 * a);
    } else {
        console.log('D < 0');
    }
}

console.log(solveQuadraticEquation(1, -1, -2));