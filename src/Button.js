import React from 'react';
import {useDispatch} from "react-redux";

function Button(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: "plus"
        })
    }
    const handleClick2 = () => {
        dispatch({
            type: "minus"
        })
    }
    return (
        <div>
            <button onClick={handleClick}>
                Plus
            </button>
            <button onClick={handleClick2}>
                Minus
            </button>
        </div>
    );
}

export default Button;