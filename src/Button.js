import React from 'react';
import {useDispatch} from "react-redux";
import {add, minus, plus, reset} from "./Func";
import {useState} from "react";

function Button(props) {
    const dispatch = useDispatch();
    const [change, setChange] = useState("")

    const handlePlus = () => {
        dispatch(plus())
    }
    const handleReset = () => {
        dispatch(reset())
    }
    const handleMinus = () => {
        dispatch(minus())
    }
    const handleChange = (e) => {
        setChange(e.target.value)
    }
    const handleAdd = () => {
        dispatch(add(Number(change)))
        setChange('')
    }
    return (
        <div>
            <button onClick={handlePlus}>
                Plus
            </button>
            <button onClick={handleMinus}>
                Minus
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <div>
                <input type="number" value={change} onChange={handleChange}/>
                <button onClick={handleAdd}>
                    Добавить
                </button>
            </div>
        </div>
    );
}

export default Button;