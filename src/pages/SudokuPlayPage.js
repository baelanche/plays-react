import React from "react";
import Sudoku from "logics/Sudoku";

const GetInitialBoard = () => {
    return Sudoku.generate('hard');
}

const GetCurrentBoard = () => {
    const grids = document.getElementsByClassName('sudoku-grid');
    let board = '';
    [...grids].forEach((grid) => {
        board += grid.innerHTML === '' ? '.' : grid.innerHTML;
    })
    return board;
}

const SudokuPlayPage = () => {
    return (
        <div>
            Sudoku
        </div>
    )
}

export default SudokuPlayPage;