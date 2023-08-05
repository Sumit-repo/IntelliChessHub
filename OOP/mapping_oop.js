'use strict';

import { Square } from "./SquareClass.js";
import { addPieceToSquare } from "./PieceLogic.js";

const MainMap =[];

for (let i = 8; i>0; i--){

    const isRowEven = i % 2 == 0 ? true
    : false ;
    const rowArray = [];


    for (let j=97;j<105; j++){

        const isElementEven = j % 2 == 0 ? true
        : false ;

        const col = String.fromCharCode(j)
        const id = col+ i;
        // creating objects for square
        const square = new Square;

        //Setting properties for square
        square.id = id;

        //for odd row & odd element
        if(!isRowEven && !isElementEven){
            square.color = 'Dark';
        }

        //for even row & odd element
        if(isRowEven && !isElementEven){
            square.color = 'Light';
        }

        //for odd row & even element
        if(!isRowEven && isElementEven){
            square.color = 'Light';
        }

        //for even row & even element
        if(isRowEven && isElementEven){
            square.color = 'Dark';
        }

        rowArray.push(square);
        
    }
   MainMap.push(rowArray);
   
} 
MainMap.forEach(function(insiderArray){
    insiderArray.forEach(function(obj){
        addPieceToSquare(obj);
    });
});
export{MainMap};
