import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const answers = [
    'Archie', 'Google', 'Altavista', 'WAIS'
  ]
  const questions = [
    {
      "question": "Who is the author of the Harry Potter series?",
      "options": [
        "Stephenie Meyer",
        "J.K. Rowling",
        "Suzanne Collins",
        "George R.R. Martin"
      ],
      "answer": "J.K. Rowling"
    },
    {
      "question": "What is the world's tallest mountain?",
      "options": [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount McKinley"
      ],
      "answer": "Mount Everest"
    },
    {
      "question": "What is the largest continent in the world?",
      "options": [
        "Asia",
        "North America",
        "Africa",
        "Europe"
      ],
      "answer": "Asia"
    },
    {
      "question": "What is the smallest planet in our solar system?",
      "options": [
        "Mars",
        "Venus",
        "Mercury",
        "Jupiter"
      ],
      "answer": "Mercury"
    },
    {
      "question": "Who is the author of the Harry Potter series?",
      "options": [
        "Stephenie Meyer",
        "J.K. Rowling",
        "Suzanne Collins",
        "George R.R. Martin"
      ],
      "answer": "J.K. Rowling"
    },
    {
      "question": "What is the world's tallest mountain?",
      "options": [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount McKinley"
      ],
      "answer": "Mount Everest"
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Saturn"
      ],
      "answer": "Mars"
    },
    {
      "question": "Who is the author of the Harry Potter series?",
      "options": [
        "Stephenie Meyer",
        "J.K. Rowling",
        "Suzanne Collins",
        "George R.R. Martin"
      ],
      "answer": "J.K. Rowling"
    },
    {
      "question": "What is the world's tallest mountain?",
      "options": [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount McKinley"
      ],
      "answer": "Mount Everest"
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Saturn"
      ],
      "answer": "Mars"
    },
    {
      "question": "Which animal is known as the 'King of the Jungle'?",
      "options": [
        "Lion",
        "Tiger",
        "Leopard",
        "Cheetah"
      ],
      "answer": "Lion"
    },
    {
      "question": "What is the largest country in the world by land area?",
      "options": [
        "China",
        "Russia",
        "Canada",
        "United States"
      ],
      "answer": "Russia"
    },
    {
      "question": "Which city is known as the 'Eternal City'?",
      "options": [
        "Athens",
        "Paris",
        "Rome",
        "Istanbul"
      ],
      "answer": "Rome"
    },
    {
      "question": "What is the world's tallest mountain?",
      "options": [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount McKinley"
      ],
      "answer": "Mount Everest"
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Saturn"
      ],
      "answer": "Mars"
    },
    {
      "question": "What is the world's tallest mountain?",
      "options": [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount McKinley"
      ],
      "answer": "Mount Everest"
    },
    {
      "question": "Which animal is known as the 'King of the Jungle'?",
      "options": [
        "Lion",
        "Tiger",
        "Leopard",
        "Cheetah"
      ],
      "answer": "Lion"
    },
    {
      "question": "What is the largest country in the world by land area?",
      "options": [
        "China",
        "Russia",
        "Canada",
        "United States"
      ],
      "answer": "Russia"
    },
    {
      "question": "Which city is known as the 'Eternal City'?",
      "options": [
        "Athens",
        "Paris",
        "Rome",
        "Istanbul"
      ],
      "answer": "Rome"
    },
    {
      "question": "What is the largest continent in the world?",
      "options": [
        "Asia",
        "North America",
        "Africa",
        "Europe"
      ],
      "answer": "Asia"
    },
  ]
  console.log(questions)
  const [selectedAnswers, setSelectedAnswer] = useState('Archie')
  const [questionIndex, setQuestionIndex] = useState(0)
  return (
    <main
      className="w-full h-full h-screen text-white bg-[#552ac8]"
    >
      {/* <img
        className='opacity-50 z-0 absolute left-0 top-0 w-full h-full'
        src="/Quiz%20Page%20(MCQ).png"
      /> */}

      <div className='relative z-50 text-[50px] pt-[50px] text-center text-black font-bold text-white flex justify-center '>
        <div className='inline absolute left-0 px-3 pt-2'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </div>
        <h1 className='pb-[15px]'>

          Quizerr
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='h-[619px] w-[341px] bg-white text-black rounded rounded-[30px] ml-[-4px] mt-[6px]'>
          <div className='pt-[24px]'>
            <h4 className='text-center tracking-[1px] text-[19px] font-bold'>  Questions</h4>
            <p className='text-center text-[#552ac8] font-bold'>{questionIndex + 1}/{questions?.length}</p>
          </div>
          <div className='pt-[9px]'>
            <div className=' bg-[#eae1fa] h-[8px] rounded-[30px] w-[73%] mx-auto'>
              <div style={{ width: ((questionIndex + 1) / questions?.length) * 100 + "%" }} className=' rounded-[30px] h-[8px] bg-[#21f14ffa] text-center leading-[30px] text-white'></div>
            </div>
          </div>
          {questions.filter((data, index) => index === questionIndex).map(data => (

            <div className='pt-[40px] my-0 mx-[17px]'>
              <h4 className='text-center lowercase tracking-[0px] text-[19px] font-bold h-[56px]'>
                {data.question}
              </h4>
              <div className='pt-[50px]'>
                <ul>
                  {data.options?.map(data => {
                    let selected = selectedAnswers === data
                    return (<li onClick={() => { setSelectedAnswer(data) }}
                      className={selected ? 'transition-all bg-[#eefff2] hover:scale-[1.03] active:scale-[0.98] transform py-[12px] flex justify-between px-[30px] mt-[3px] mr-[9px] mb-[10px] ml-[9px] rounded-[12px] border border-[#4CAF50]' :
                        'transition-all hover:scale-[1.03] active:scale-[0.98] transform px-[32px] py-[13px] mt-0 mr-[9px] mb-[10px] ml-[11px] rounded-[12px] bg-[#f7f7f8] text-black'
                      }>

                      <h1>{data}</h1>
                      {selected && <svg xmlns="http://www.w3.org/2000/svg" fill="#4CAF50" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFF" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>}

                    </li>)
                  })}

                </ul>
              </div>
              <a href='#' onClick={() => { if (questionIndex + 1 !== questions.length) { setQuestionIndex(questionIndex + 1) } }} className='flex items-center justify-center transition-all text-white hover:scale-[1.03] active:scale-[0.98] transform  px-[10px] py-[13px] w-[293px] rounded-[11px] border text-center text-[16px] uppercase font-bold mx-auto mt-[23px] mb-0 bg-[#7e4ffc]'>
                {questionIndex + 1 === questions.length ? "Submit" : "Next"}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

              </a>

              <a href='#' className='flex space-x-1 py-1 text-black font-bold text-sm items-center justify-center text-center border w-[84px] mx-auto mt-[19px] mb-0 p-[2px] rounded-[50px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c170fd" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <h1 onClick={() => { setSelectedAnswer(questions[questionIndex]?.answer) }}>

                  Hint
                </h1>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
