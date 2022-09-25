import React, { useEffect, useState } from 'react'
import Question from './Question.js'


function Quiz() {
    const [questionData, setQuestionData] = useState([])
    const [isHeld, setIsHeld] = useState(false)

    function selectOption() {
        setIsHeld((prevIsHeld) => !prevIsHeld)
        console.log(isHeld)
    }

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => {
                setQuestionData(data.results)
            })
    }, [])


  return (
    <div>
        {
            questionData.map((item, i)=>{
                return (
                    <Question key={i}
                        selectOption={selectOption}
                        {...item}
                    />
                )
            })
        }
    </div>
  )
}

export default Quiz