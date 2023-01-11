import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import '../Style/HomepageStyle.css'

function HomePage(){
    const [displayValue, setDisplayValue] = useState({
        current: '0',
        total: '0',
        isInitial:true,
        operatorSign:'',
      }); 

    function handleNumber(value){
        let newValue = value;
        if(!displayValue.isInitial){
          newValue = displayValue.current + value ;
        }
      setDisplayValue({current:newValue, total:displayValue.total,isInitial:false,operatorSign:displayValue.operatorSign});
    }

    function handleOperator(value){
       const total = handleCalculation()
       setDisplayValue({current:total.toString(), total:total.toString(),isInitial:true,operatorSign:value});
    }

    function handleCalculation(){
        let total = parseInt(displayValue.total);

        switch(displayValue.operatorSign){
            case '+':
                total += parseInt(displayValue.current);
                break;
            case '-':
                total -= parseInt(displayValue.current);
                break;
            case '*':
                total *= parseInt(displayValue.current);
                break;
            case '/':
                total /= parseInt(displayValue.current);
                break;
            default:
                total = parseInt(displayValue.current);
        }
        return total;
    }

    function handleClear() {
        setDisplayValue({
         current: "0",
         total: "0",
         isInitial: true,
         preOp: ""
       });
      }

    function renderDisplay(){
        return displayValue.current; 
    }
    
    return (
        <div className="calculator">
            <div className="display">
                {renderDisplay()}
            </div>
            <CalculatorButton value='7' onClick={handleNumber} />
            <CalculatorButton value='8' onClick={handleNumber}/>
            <CalculatorButton value='9' onClick={handleNumber}/>
            <CalculatorButton className='operator' value='/' onClick={handleOperator}/>
            <CalculatorButton value='4' onClick={handleNumber}/>
            <CalculatorButton value='5' onClick={handleNumber}/>
            <CalculatorButton value='6' onClick={handleNumber}/>
            <CalculatorButton className='operator' value='*' onClick={handleOperator}/>
            <CalculatorButton value='1' onClick={handleNumber}/>
            <CalculatorButton value='2' onClick={handleNumber}/>
            <CalculatorButton value='3' onClick={handleNumber}/>
            <CalculatorButton className='operator' value='-' onClick={handleOperator}/>
            <CalculatorButton value='C' onClick={handleClear}/>
            <CalculatorButton value='0' onClick={handleNumber}/>
            <CalculatorButton value='=' onClick={handleOperator} />
            <CalculatorButton className='operator' value='+' onClick={handleOperator} />
        </div>
    )
}

export default HomePage;