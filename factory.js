export function ran(numberRange) { return Math.floor(Math.random() * numberRange + 1); }

export const NestedForLoop = (magicSquare) => {
    let totalOfAll = 0
    for (let i = 0; i < magicSquare.length; i++) {
        let row = magicSquare[i]
        let sum = 0;
        for (let j = 0; j < row.length; j++) {
            sum += row[j]
        }
        totalOfAll += sum
    }
    return totalOfAll
}
export function trimWhiteSpaces(str){
    let trimmed = ""
    for(let letter of str){
        letter !== " "?trimmed +=letter:null
    }
    return trimmed
}
