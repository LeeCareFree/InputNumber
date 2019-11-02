import React,{useState} from 'react';
import './App.css';
import InputNumber from "./InputNumber/InputNumber";
function App(){
    const [value,setValue] = useState('aaa');
    return (
        <div>
            <InputNumber value={value} onChange={value => {setValue(value)}} />
            <InputNumber defaultValue={value} onChange={e=>{}} />
        </div>
    )
}
export default App





















