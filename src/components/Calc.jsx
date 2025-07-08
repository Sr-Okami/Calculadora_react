import React, { useState } from "react";
import Button from "./Button";

const Calc = () => {
    const [valor, setValor] = useState("");

    const handleClick = (val) => {
        setValor(valor = val);
    };
    console.log(valor);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="mb-4">
                <input placeholder="calcule aqui" type="text" readOnly value={valor}
                className="w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
                <Button onClick={() => handleClick(7)} label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="/" className="bg-blue-500 text-white" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="*" className="bg-blue-500 text-white" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="-" className="bg-blue-500 text-white" />
                <Button label="0" />
                <Button label="." />
                <Button label="=" className="bg-blue-500 text-white" />
                <Button label="+" className="bg-blue-500 text-white" />
            </div>
        </div>
    );
};

export default Calc;