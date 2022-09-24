import React from 'react'

function Question(props) {


    // this is array for putting all the options
    let randomOption = [];
    for(let i=0; i<3; i++){
        randomOption.push(<button className='answer'>{props.incorrect_answers}</button>)
    }
    randomOption.push(<button className='answer'>{props.correct_answer}</button>)

    // Fisher-Yates Shuffle Modern Algorithm for random options for answers.
    let i = randomOption.length, j, temp
    while(--i > 0){
        j= Math.floor(Math.random() * (i+1))
        temp = randomOption[j]
        randomOption[j] = randomOption[i]
        randomOption[i] = temp
    }


    return (
        <div>
            <h3 className="question">{props.question}</h3>
            <div className='answerContainer'>
                {randomOption}
            </div>
        </div>
    )
}

export default Question