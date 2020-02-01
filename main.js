document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const clientX = `${x}`;
    const clientY = `${y}`;

    if (clientX % 2 == 0 && clientY % 2 == 0) {
        document.body.style.backgroundColor = 'red';
    } else if (clientX % 2 != 0 && clientY % 2 != 0) {
        document.body.style.backgroundColor = 'blue';
    } else if (clientX % 2 == 0 && clientY % 2 != 0) {
        document.body.style.backgroundColor = 'green';
    } else if (clientX % 2 != 0 && clientY % 2 == 0) {
        document.body.style.backgroundColor = 'green';
    }

    console.log(clientX, clientY)
})