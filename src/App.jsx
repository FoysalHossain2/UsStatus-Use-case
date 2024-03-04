import React, { useState } from 'react' 
import './App.css'

 function App() {

 const [fromData , setFromData] = useState(
  {
    userName: '',
    userEmail: '',
    userPhone: '',
    userPassword: '',
    index: '',
  }
 )

 const [userData, setUserData] = useState([])

 
 let getData = (e) => {
  let oldData = {...fromData}
  let inputName = e.target.name
  let inputValue = e.target.value
   oldData[inputName] = inputValue
   setFromData(oldData)
 }

 let HandleSubmit = (e) => {
  e.preventDefault()

  let currentOldData = {
    userName: fromData.userName,
    userEmail: fromData.userEmail,
    userPhone: fromData.userPhone,
    userPassword: fromData.userPassword,
  }
  
  let userCheckData = userData.filter((v) => v.userEmail==fromData.userEmail || v.userPassword==fromData.userPassword)
  if (userCheckData.length>=1) {
    alert('Email or password already exit')
  }
  else {

    let currentUserData = [...userData, currentOldData]
    setUserData(currentUserData);

    setFromData(
    { userName: '',
      userEmail: '',
      userPhone: '',
      userPassword: '',
      index: '',
    }
    )
  }

 }

 let deleteRow = (indexNumber) => {
   let currentDataDelete = userData.filter((v,i) => i !==indexNumber)
   setUserData(currentDataDelete);
 }


  
  return (
    <>   
      <div className='container mt-14'>
         <div className='flex justify-around'>

          <form onSubmit={HandleSubmit}>          
          {userData.length}
            <div className='flex flex-col'>
              <label htmlFor="">UserName</label>
              <input 
              type="text"
              onChange={getData}
              value={fromData.userName}
              name="userName" 
              className='w-[300px]
               bg-slate-200 py-2 
               rounded-lg outline-none'
               />
            </div>
            <div className='flex flex-col'>
              <label className='pt-5'  htmlFor="">Email</label>
              <input 
              type="email"
              value={fromData.userEmail}
              onChange={getData}
              name='userEmail'
               className='w-[300px]
               bg-slate-200 py-2
                rounded-lg outline-none' 
               />
            </div>
            <div className='flex flex-col'>
              <label  className='pt-5' htmlFor="">Phone Number</label>
              <input
               type="number"
               name="userPhone"   
               value={fromData.userPhone}  
               onChange={getData}                    
               className='w-[300px]
               bg-slate-200 py-2 
               rounded-lg outline-none '
              />
            </div>
            <div className='flex flex-col'>
              <label  className='pt-5' htmlFor="">Password</label>
              <input 
              type="password" 
              value={fromData.userPassword}
              onChange={getData}
              name="userPassword"                         
              className='w-[300px]
               bg-slate-200 py-2 
               rounded-lg outline-none '
             />
            </div>

            <button className='bg-orange-400 py-1 px-3 mt-6 rounded-md text-white'>
              {fromData.index !== "" ? 'Update' : 'Save'}
            </button>
          </form>

         <div>
         <table >
          <tr >
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Action</th>
          </tr>

           {userData.length>= 1 ?
           
           userData.map((Obj,index)=>(

            <tr className='bg-gray-300' key={index}>
              <td>{index + 1}</td>
             <td>{Obj.userName}</td>
             <td>{Obj.userEmail}</td>
             <td>{Obj.userPhone}</td>
             <td>{Obj.userPassword}</td>
              <td>
                <button className='border border-gray-700 ml-2' onClick={()=>deleteRow(index)}>
                  Delete
                </button>
                <button className='border border-gray-700 ml-2'>
                  Edit
                </button>
              </td>
           </tr>
           ))
           :
           <tr className='text-center'>Data Not Found</tr>
          }

         </table>

         </div>
         </div>
      </div>
    </>
  )
}

export default App;