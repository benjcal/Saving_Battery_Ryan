// to execute run "node stuff.js"

const fs = require("fs")

// read input
const f = fs.readFileSync("iu.txt").toString().trim()

// split file in block
// TODO: name the blocks?
const blocks = f.split("\n\n")

// processBlocks takes a multiline string and return an object
const processBlock = (block) => {
    const lines = block.split("\n")

    let o = {}
    lines.forEach((l) => {
        const [k, v] = parseLine(l)
        o[k] = v
    })

    return o
}

// parseLine take a single line and return an array with the
// key name and the value found on the line
const parseLine = (line) => {
    const kv = line.split(":").map((l) => l.trim())

    const k = kv[0].replaceAll(" ", "_").replaceAll("-", "_")
    const v = kv[1]

    return [k, v]
}

let blocksParsed = []

blocks.forEach((block) => {
    blocksParsed.push(processBlock(block))
})

console.log(blocksParsed)

// todo: manage the data types (i.e. W, °C, MHZ) appropriatedly
