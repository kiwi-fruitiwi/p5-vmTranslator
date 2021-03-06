/**
 *  @author kiwi
 *  @date 2022.05.01
 *
 *  an implementation of project 7 and 8 from Coursera's nand2tetris II
 *  class in p5.js to reinforce the concepts after completing the project in
 *  python
 *
 */
let font
let instructions

let parser
let vmCode

function preload() {
    font = loadFont('data/consola.ttf')
    vmCode = loadStrings('vm/SimpleAdd.vm')
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [] โ ๐ณ๐ฅ
        z โ freeze sketch</pre>`)

    parser = new Parser(vmCode)
    noLoop()
}


function draw() {
    background(234, 34, 24)
    displayDebugCorner()
}


/** ๐งน shows debugging info using text() ๐งน */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    text(`frameCount: ${frameCount}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}