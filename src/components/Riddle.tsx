import {riddles} from "../data/riddles";
import {useState} from "react";

export default function Riddle() {

    const [randomQuestion, setRandomQuestion] = useState(Math.round(Math.random() * riddles.length))
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);


    return (
        <div className='mx-2'>
            <div className='h-[1px] bg-gray-200 w-full'/>
            <p className='py-3 uppercase font-semibold text-gray-400'>
                Quiz
            </p>
            <p className='text-center'>{riddles[randomQuestion].question}</p>
            {riddles[randomQuestion].answers.map(({content, isCorrect}, key) => (
                <button
                    key={key}
                    className={`${showCorrectAnswers && (isCorrect ? 'bg-green-400' : 'bg-red-400')} outline-none w-full my-0.5 border border-gray-200 gap-2 hover:border-gray-500`}
                    onClick={() => {
                        setShowCorrectAnswers(true)
                        const timeoutID = setTimeout(() => {
                            setRandomQuestion(Math.round(Math.random() * riddles.length))
                            setShowCorrectAnswers(false)
                        }, 2000);
                        return () => clearTimeout(timeoutID);
                    }}>
                    {content}
                </button>
            ))}
        </div>
    )
}