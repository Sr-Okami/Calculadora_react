import React, { useState } from "react";
import Button from "./Button";
import { evaluate } from "mathjs";

const Calc = () => {
    const [valor, setValor] = useState("");
    
    // Renderiza os numeros e operadores
    const handleClick = (val) => {
        setValor(valor + val);
    };
    
    // Calcula a expressao
    const calcular = () => {
        try {
            // Substitui * por × para evitar problemas com eval
            const expressao = valor.replace(/×/g, '*');
            const resultado = evaluate(expressao);
            setValor(resultado.toString());
        }
        catch (error) {
            setValor("Erro");
        }
    };
    //console.log(valor);
    
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-3">
            <div
            className="bg-gray-600 p-6 rounded-lg shadow-[5px_17px_21px_0px_#1a202c] w-full max-w-sm"
            >
                <div className="mb-4">
                    <input 
                        placeholder="calcule aqui" 
                        type="text" 
                        readOnly 
                        value={valor}
                        className="bg-green-800 text-white font-bold w-full p-2 border-3 border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
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
                    <Button onClick={() => handleClick("*")} label="×" className="" />
                    <Button onClick={() => handleClick("1")} label="1" />
                    <Button onClick={() => handleClick("2")} label="2" />
                    <Button onClick={() => handleClick("3")} label="3" />
                    <Button onClick={() => handleClick("-")} label="-" className="" />
                    <Button onClick={() => handleClick("0")} label="0" />
                    <Button onClick={() => handleClick(".")} label="." />
                    <Button onClick={calcular} label="=" className="bg-green-500 hover:bg-green-600" />
                    <Button onClick={() => handleClick("+")} label="+" />
                </div>
                <div className="mt-2">
                    <Button onClick={() => setValor("")} label="Del" className="bg-red-600 hover:bg-red-700"/>
                </div>
            </div>    
        </div>
    );
};

export default Calc;