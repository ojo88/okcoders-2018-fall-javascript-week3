var table = [['a', 'b', 'c', 'd'],['e', 'f', 'g', 'h'], ['i','j','k','l'], ['m' ,'n', 'o', 'p']];

function print() {
for(i = 0; i < table.length; i++) {
    for(j = 0; j < table[i].length; j++) {
    console.log(table[i][j]);
      }
    }
}

print();