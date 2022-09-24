import React, { useState, useEffect } from 'react'
import Question from './Question.js'


function Quiz() {
    const [questionsData, setQuestionsData] = useState([]);

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => {
                console.log(data.results)
                setQuestionsData(data.results);
            })
            console.log("render")
    }, [])


  return (
    <div>
        {
            questionsData.map((item, i) => (
                <Question key={i}
                    {...item}
                />
            ))
        }
    </div>
  )
}

export default Quiz