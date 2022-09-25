import React, { useEffect, useState } from 'react'

function Question(props) {
    const [isHeld, setIsHeld] = useState(false)
    const [options, setOptions] = useState([])

    function selectOption() {
        setIsHeld((prevIsHeld) => !prevIsHeld)
        console.log(isHeld)
    }

    const styles = {
        backgroundColor: isHeld ? "green" : "transparent"
    }

    // this is array for putting all the options
    let randomOption = [];
    
    for(let i=0; i<3; i++){
        randomOption.push(<button className='answer' onClick={selectOption} style={styles} >{props.incorrect_answers[i]}</button>)
    }
    randomOption.push(<button className='answer' onClick={selectOption} style={styles} >{props.correct_answer}</button>)

    useEffect(()=>{
        let i = randomOption.length, j, temp
            while(--i > 0){
        j= Math.floor(Math.random() * (i+1))
        temp = randomOption[j]
        randomOption[j] = randomOption[i]
        randomOption[i] = temp
    }
    setOptions(randomOption)
    }, [])
    // Fisher-Yates Shuffle Modern Algorithm for random options for answers.
    


    return (
        <div>
            <h3 className="question">{props.question}</h3>
            <div className='answerContainer'>
                {options}
            </div>
        </div>
    )
}

export default Question