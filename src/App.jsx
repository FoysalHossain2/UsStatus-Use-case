
import { useState } from 'react'
import './App.css'

function App() {

  const [modelStatus , setModalStatus] = useState(false)

  
  return (
    <>   



<button className='btn bg-slate-600 p-2' onClick={()=>setModalStatus(true)} > Open Model </button>

<div onClick={()=>setModalStatus(false)} className={`modelOverlay ${modelStatus ? 'ShowModal': ''}` } ></div>
<div className={ `modelDiv1  ${modelStatus ? 'ShowModalDiv': ''}`} >
  <h2 className='text-center'>
    Enquiry <span onClick={()=>setModalStatus(false)} className='cursor-pointer'>&times;</span>
  </h2>
</div>
    </>
  )
}

export default App