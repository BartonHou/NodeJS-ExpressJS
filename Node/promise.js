
const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./giao.txt', 'utf-8')
        console.log(first)
        await writeFile('./giao.txt', 'Giao',{flag: 'a'})
    } catch (error) {
        console.log(error)
    }
}
start()
