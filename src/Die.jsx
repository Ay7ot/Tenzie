import React from 'react';


const Die = (props) => {
    const styles = {
        backgroundColor: props.color ? "#0B2434" : "white",
        color: props.color ? "#ffffff" : "#000000"
    }
    return (
        <div onClick={props.holdDice} 
            style={styles}
            className={
                props.value === 1 ? "first-face die" :
                props.value === 2 ? "second-face die" :
                props.value === 3 ? "third-face die" :
                props.value === 4 ? "fourth-face die" :
                props.value === 5 ? "fifth-face die" : "sixth-face die" 
            }
        >
           <h2>{props.value}</h2>
           {props.value === 1 && <span className={props.color ? "dot-active" : "dot"}></span>}
           {props.value === 2 && 
                <>
                    <span className={props.color ? "dot-active" : "dot"}></span>
                    <span className={props.color ? "dot-active" : "dot"}></span>
                </>
            }
            {props.value === 3 && 
                <>
                    <span className={props.color ? "dot-active" : "dot"}></span>
                    <span className={props.color ? "dot-active" : "dot"}></span>
                    <span className={props.color ? "dot-active" : "dot"}></span>
                </>
            }
            {props.value === 4 && 
                <>
                   <div className='column'>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        
                    </div>
                    <div className='column'>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        
                    </div>
                </>
            }
            {props.value === 5 && 
                <>
                    <div className='column'>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                    </div>
                    <div className='column'>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                    </div>
                    <div className='column'>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                    </div>
                </>
            }
            {props.value === 6 && 
                <>
                    <div className='column'>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                    </div>
                    <div className='column'>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                        <span className={props.color ? "dot-active" : "dot"}></span>
                    </div>
                </>
            }
        </div>
    );
}

export default Die;
