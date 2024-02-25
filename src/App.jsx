import { useState } from 'react'
import './App.css'
import {question} from './Data/Data'

function App() {

  const [showAns , setShowAns] = useState(question[0].id)
  
  return (
    <>   
     <div className='w-[1320px] m-auto'>
      <h1 className='text-center font-medium text-3xl'>Frequently Ask Questions FAQ </h1>
       <div className='w-1/2 mt-10' >

        {question.map((faqItems,i)=>{
          
        return(
          <div className='faqItems border border-sky-500 mb-3'>
          <h2 className='text-center bg-slate-600 py-3  cursor-pointer' onClick={()=>setShowAns(faqItems.id)}>
            {faqItems.question}
          </h2>
          <p className={`text-center h-0 m-0 scale-0 transition-all ${showAns === faqItems.id ? 'active' : ''}`}
             > 
            {faqItems.answer}
          </p>
        </div>
        )

        })}


       </div>
     </div>
    </>
  )
}

export default App