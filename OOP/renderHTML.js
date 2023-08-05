'use strict';

import { pawnMove } from "./pawnMove.js";

const renderUI = function(squares){
    
    //sleect board container from markup
    const boardContainer = document.querySelector('.board-container');

    let rankID = 8; 
    //create square of size 100 X 100
    squares.forEach(element => {
        let rank = document.createElement("div");
        rank.classList.add('rank');
        rank.setAttribute("id",rankID--);
        


        element.forEach((el) =>{
            
            const square = document.createElement('div');
            square.classList.add(`color-${el.color}`);
            square.classList.add('box');
        
            square.setAttribute('id',el.id);    
            square.classList.add("file-"+el.id[0]);

            

            const imgEl = document.createElement("img");
            if(el.isPiece){
                const pieceEl = document.createElement("div");
                imgEl.setAttribute("src", el.isPiece);
                pieceEl.appendChild(imgEl);
                square.appendChild(pieceEl);

                pieceEl.addEventListener("click",function(){
                    pawnMove(el);
                });
            }
            rank.appendChild(square);
            
        })
        boardContainer.appendChild(rank);
    });
};
import { MainMap } from "./mapping_oop.js";
renderUI(MainMap);