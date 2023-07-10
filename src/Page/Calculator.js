import '../App.css';
import classes from "./Calculator.module.css"
function Calculator() {
    return (
        <div className={classes.mainDiv}>
            <div className={classes.calculatorDiv} >
                <div className={classes.resultDiv}>
                </div>
                <div className={classes.buttonDiv} >
                    <button type="button" className={classes.buttonBlue}>C</button>
                    <button type="button" className={classes.buttonBlue}>+/-</button>
                    <button type="button" className={classes.buttonBlue}>%</button>
                    <button type="button" className={classes.buttonYellow}>÷</button>
                </div>
                <div className={classes.buttonDiv}>
                    <button type="button" className={classes.buttonBlue}>7</button>
                    <button type="button" className={classes.buttonBlue}>8</button>
                    <button type="button" className={classes.buttonBlue}>9</button>
                    <button type="button" className={classes.buttonYellow}>×</button>
                </div>
                <div className={classes.buttonDiv}>
                    <button type="button" className={classes.buttonBlue} >4</button>
                    <button type="button" className={classes.buttonBlue} >5</button>
                    <button type="button" className={classes.buttonBlue} >6</button>
                    <button type="button" className={classes.buttonYellow} >-</button>

                </div>
                <div className={classes.buttonDiv}>
                    <button type="button" className={classes.buttonBlue} >1</button>
                    <button type="button" className={classes.buttonBlue} >2</button>
                    <button type="button" className={classes.buttonBlue} >3</button>
                    <button type="button" className={classes.buttonYellow} >+</button>
                </div>
                <div className={classes.buttonDiv}>
                    <button type="button" className={classes.buttonZero} >0</button>
                    <button type="button" className={classes.buttonBlue} >.</button>
                    <button type="button" className={classes.buttonYellow} >=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
