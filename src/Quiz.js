import React, { useEffect } from 'react'
import Question from './Question.js'


function Quiz() {
    let questions;

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => {
                console.log(data.results)
                const d = data.results
                    questions = d.map(item => {
                    return (
                        <Question
                            {...item}
                        />
                    )
                })
            })
            console.log("render")
    })


  return (
    <div>
        {questions}
    </div>
  )
}

export default Quiz