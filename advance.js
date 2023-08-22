const baris = 5;

for (let i = baris; i >= 1; i--) {
    let outputbaris = '';
    for (let j = i; j >= 1; j--) {
        outputbaris += j + ' ';
    }
    console.log(outputbaris);
}
