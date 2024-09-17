function createKaraTable(max) {
    let table = '';
    let header = '   ';
    for (let i = 1; i <= max; i++) {
        header += i.toString().padStart(4, ' ');
    }
    table += header + '\n';
    for (let i = 1; i <= max; i++) {
        let row = i.toString().padStart(2, ' ');
        for (let j = 1; j <= max; j++) {
            row += (i * j).toString().padStart(4, ' ');
        }
        table += row + '\n';
    }
    return table;
}

const maxNumber = 10;
const karaTable = createKaraTable(maxNumber);

console.log(karaTable);