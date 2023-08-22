const baris = 5;

for (let i = baris; i >= 1; i--) {
    let rowOutput = '';
    for (let j = i; j >= 1; j--) {
        rowOutput += j + ' ';
    }
    console.log(rowOutput);
}
