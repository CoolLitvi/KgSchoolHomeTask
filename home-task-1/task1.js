function drawTriangle(height) {
    let lineToPrint = '';

    for(let i = 0; i < height; i++){
        lineToPrint = lineToPrint + ' #';
        console.log(lineToPrint);
    }
}

drawTriangle(3);

