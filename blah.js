const parseLine = (line) => {
    const kv = line.split(":").map((l) => l.trim())

    const k = kv[0].replaceAll(" ", "_").replaceAll("-", "_").toLowerCase()
    const v = kv[1]

    return [k, v]
}

const fs = require("fs")
const data = fs.readFileSync('iu.txt', 'utf8')

const blocks = data.split("MHz\n\n")

let block = blocks[0] + "MHz"
block = block
    .replaceAll("\n\n", "\n")
    .split("\n")
    .map(parseLine)




console.log(block)


// const lines = block[0].split("\n")

// let line = lines[0]

// let dataType

// if (line.endsWith("W")) {
//     dataType = "Watts"
// } else if (line.endsWith("°C")) {
//     dataType = "Temperature"
// } else if (line.endsWith("MHz")) {
//     dataType = "Frequency"
// }

// const parts = line.split(":")
// let key = parts[0].trim()

// let value = parts[1]
//     .replace("W", "")
//     .replace("°C", "")
//     .replace("MHz", "")
//     .trim()

// let o = {}

// o[key] = parseFloat(value)

// console.log(o)

