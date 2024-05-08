import React from "react";
import Button from "components/common/Button/Button";

const GameListPage = () => {
    return (
        <div>
            <div className={"d-flex justify-content-center"}>
                <Button to="/sudoku" theme="p-4 sudoku"></Button>
                <Button theme="p-4 game2"></Button>
            </div>
            <div className={"d-flex justify-content-center"}>
                <Button theme="p-4 game3"></Button>
                <Button theme="p-4 game4"></Button>
            </div>
        </div>
    )
}

export default GameListPage;