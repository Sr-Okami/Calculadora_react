import React, { useState } from "react";
import Button from "./Button";

const Calc = () => {
    const [valor, setValor] = useState("");

    let handleClick = (val) => {
        setValor(valor + val);
    };
    let calcular = () => {
        let resultado = calcularExpressao(valor);
        setValor(resultado);
    };
    function calcularExpressao(expressao) {
        try {
            return eval(expressao).toString();
        } catch (error) {
            return "Erro";
        }
    }


    console.log(valor);
    console.log(calcularExpressao(valor));

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="mb-4">
                <input placeholder="calcule aqui" type="text" readOnly value={valor}
                className="w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
                <Button onClick={() => handleClick("7")} label="7" />
                <Button onClick={() => handleClick("8")} label="8" />
                <Button onClick={() => handleClick("9")} label="9" />
                <Button onClick={() => handleClick("/")} label="/" className="" />
                <Button onClick={() => handleClick("4")} label="4" />
                <Button onClick={() => handleClick("5")} label="5" />
                <Button onClick={() => handleClick("6")} label="6" />
                <Button onClick={() => handleClick("*")} label="*" className="" />
                <Button onClick={() => handleClick("1")} label="1" />
                <Button onClick={() => handleClick("2")} label="2" />
                <Button onClick={() => handleClick("3")} label="3" />
                <Button onClick={() => handleClick("-")} label="-" className="" />
                <Button onClick={() => handleClick("0")} label="0" />
                <Button onClick={() => handleClick(".")} label="." />
                <Button onClick={calcular} label="=" className="bg-green-500 hover:bg-green-600" />
                <Button onClick={() => handleClick("+")} label="+" />
            </div>
            <div>
                <Button onClick={() => setValor("")} label="Del" className="bg-red-600 hover:bg-red-700"/>
            </div>
        </div>
    );
};

export default Calc;