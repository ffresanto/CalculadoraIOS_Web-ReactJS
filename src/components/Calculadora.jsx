import React from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container';
import {Box} from '@mui/system'
import { useState } from 'react';


export default function Calculadora() {

    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operador, setOperador] = useState()

    const [ac, setAc] = useState("AC")

    function inputNum(e) {
        var input = e.target.value;

        if (input === undefined) {
         input = 0;
        }

        if (num === 0) {
            setNum(input); 
            setAc("C")
        } else {
           setNum(num + input); 
        }
    }

    function limpar(e) {
        setAc("AC")
        setNum(0);
        setOldNum(0)
        setOperador("")
    }

    function porcentagem() {
        setNum(num / 100);
    }

    function mudarSinal() {
        if (num > 0) {
          setNum(-num);
        } else {
          setNum(Math.abs(num))
       }
    }

    function calcular() {
        
        switch (operador) {
            
            case "/":
                setNum(parseFloat(oldNum) / parseFloat(num));
                break;
            
            case "X":
                setNum(parseFloat(oldNum) * parseFloat(num));
                break;
            
            case "-":
                setNum(parseFloat(oldNum) - parseFloat(num));
                break;
            
            case "+":
                setNum(parseFloat(oldNum) + parseFloat(num));
                break;
            
        default:
    // code block
}

    }

    function operadorHandler(e) {
        var operadorInput = e.target.value

        setOperador(operadorInput)
        setOldNum(num)
        setNum(0)
    }

    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <Box m={12}/>
                    <h1 className='resultado'>{ num }</h1>
                    <button className='light_gray' onClick={limpar}>{ ac }</button>
                    <button className='light_gray' onClick={mudarSinal}>+/-</button>
                    <button className='light_gray' onClick={porcentagem}>%</button>
                    <button className='orange' onClick={operadorHandler} value="/">/</button>
                    <button className='gray' onClick={inputNum} value={7}>7</button>
                    <button className='gray' onClick={inputNum} value={8}>8</button>
                    <button className='gray' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operadorHandler} value="X">X</button>
                    <button className='gray' onClick={inputNum} value={4}>4</button>
                    <button className='gray' onClick={inputNum} value={5}>5</button>
                    <button className='gray' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operadorHandler} value="-">-</button>
                    <button className='gray' onClick={inputNum} value={1}>1</button>
                    <button className='gray' onClick={inputNum} value={2}>2</button>
                    <button className='gray' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operadorHandler} value="+">+</button>
                    <button className='button_zero' onClick={inputNum} value={0}><div>0</div></button>
                    <button className='gray' onClick={inputNum} value=".">.</button>
                    <button className='orange' onClick={calcular}>=</button>
                </div>
            </Container>
         </div>
    )
}

