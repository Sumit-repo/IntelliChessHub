export function addPieceToSquare(obj) {
    const rank = obj.id[1];
    
    //black
    if (rank == 7){
        obj.isPiece = 'img/bp.png';
    }
    if (obj.id == "h8" || obj.id == "a8"){
        obj.isPiece = "img/br.png";
    }
    if (obj.id == "g8" || obj.id == "b8"){
        obj.isPiece = "img/bn.png";
    }
    if (obj.id == "f8" || obj.id == "c8"){
        obj.isPiece = "img/bb.png";
    }
    if (obj.id == "e8"){
        obj.isPiece = "img/bk.png";
    }
    if (obj.id == "d8"){
        obj.isPiece = "img/bq.png";
    }
    //white
    if (rank == 2){
        obj.isPiece = "img/wp.png";
    }
    if (obj.id == "h1" || obj.id == "a1"){
        obj.isPiece = "img/wr.png";
    }
    if (obj.id == "g1" || obj.id == "b1"){
        obj.isPiece = "img/wn.png";
    }
    if (obj.id == "f1" || obj.id == "c1"){
        obj.isPiece = "img/wb.png";
    }
    if (obj.id == "e1"){
        obj.isPiece = "img/wk.png";
    }
    if (obj.id == "d1"){
        obj.isPiece = "img/wq.png";
    }
}