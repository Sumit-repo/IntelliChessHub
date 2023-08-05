const pawnComp = "<div class='pawnComp'><img src='img/bp.png' alt='chess-pawn-peice-image'></div> "

colName.forEach((i) =>{
    const id=(i+7);
    const element = document.getElementById(id);
    element.innerHTML = pawnComp;
});