const { readFile, wirteFile, writeFile } = require('fs')

readFile('./giao.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(result)
})

writeFile('./giao.txt', 'Giao', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('finish write')
}
)