function pawnFirstMove(row,coloum){
    let newRow = row;
    for(let i = 0; i < 2 ; i++ ){
        newRow++;
        const elementToBeHigh = document.getElementById(coloum + newRow);
        const movesH = document.createElement("div");
        movesH.setAttribute("class", '.circle')
        elementToBeHigh.append(movesH);
        console.log(elementToBeHigh);
        }
}
export function pawnMove(el) {
    const row= el.id[1];
    const coloum = el.id[0];

    if (row == 2){
        pawnFirstMove(row,coloum);
    }
    
}