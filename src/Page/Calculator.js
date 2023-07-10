import { useState } from 'react';
import '../App.css';
import classes from "./Calculator.module.css"
function Calculator() {
    const [equation, setEquation] = useState("");
    const [result, setResult] = useState("");
    const [lastValue , setLastValue] = useState("")

    const solved = (event) => {
        let value = event.target.textContent;
        let currentValue = equation;
        if (value === "+/-") {
            setResult((tempValue) => tempValue * -1)
            return;
        }
          if (value === "←") {
            currentValue = currentValue.slice(0, -1);
            setEquation(currentValue);
            solveEquation(currentValue);
            return;
          }
          if (isNaN(value) && isNaN(lastValue)) {
            currentValue = currentValue.slice(0, -1);
            currentValue += value;
            setEquation(currentValue);
          } else if (isNaN(value)) {
            setEquation((prevEquation) => prevEquation + value);
          } else {
            setEquation((prevEquation) => prevEquation + value);
            solveEquation(currentValue + value);
          }
        setLastValue(value);

    };

    const solveEquation = (equation) => {
      let evaluatedResult = "";
      let currentNumber = "";
      let lastOperator = null;

      for (let i = 0; i < equation.length; i++) {
        const char = equation[i];

        if (isNaN(char) && char !== ".") {
          if (currentNumber !== "") {
            evaluatedResult = performOperation(
              evaluatedResult,
              parseFloat(currentNumber),
              lastOperator
            );
            currentNumber = "";
          }
          lastOperator = char;
        } else {
          currentNumber += char;
        }
      }

      if (currentNumber !== "") {
        evaluatedResult = performOperation(
          evaluatedResult,
          parseFloat(currentNumber),
          lastOperator
        );
      }

      setResult(evaluatedResult.toString());
    };

    const performOperation = (result, number, operator) => {   
      if (operator === "+") {
        return result + number;
      } else if (operator === "-") {
        return result - number;
      } else if (operator === "×") {
        return result * number;
      } else if (operator === "÷") {
        return result / number;
      } else {
        return number;
      }
    };

    const clearEquation = () => {
      setEquation("");
      setResult("");
    };
    const equal = () => {
        setEquation(result)
        setResult("")
        setLastValue("")

    }

    return (
      <div className={classes.mainDiv}>
        <div className={classes.calculatorDiv}>
          <div className={classes.resultDiv}>
            <p className={classes.resultP}>{equation}</p>
            <p className={classes.resultP}>{result}</p>
          </div>
          <div className={classes.buttonDiv}>
            <button
              onClick={clearEquation}
              type="button"
              className={classes.buttonBlue}
            >
              C
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              +/-
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              &#8592;
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonYellow}
            >
              ÷
            </button>
          </div>
          <div className={classes.buttonDiv}>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              7
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              8
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              9
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonYellow}
            >
              ×
            </button>
          </div>
          <div className={classes.buttonDiv}>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              4
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              5
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              6
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonYellow}
            >
              -
            </button>
          </div>
          <div className={classes.buttonDiv}>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              1
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              2
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              3
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonYellow}
            >
              +
            </button>
          </div>
          <div className={classes.buttonDiv}>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonZero}
            >
              0
            </button>
            <button
              onClick={solved}
              type="button"
              className={classes.buttonBlue}
            >
              .
            </button>
            <button
              onClick={equal}
              type="button"
              className={classes.buttonYellow}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
}

export default Calculator;
