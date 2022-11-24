import React,{useState} from 'react'
import './modal.scss'

function Modal() {

    const [modal,setModal]=useState(true);
    const [input,setInput] =useState({
        city:'',
        country:''
    });

    const toggleModal =()=>{
        setModal(!modal);
    }

    const handleSumit = () =>{
        
        setInput({...input})
        console.log(input);
        toggleModal()
    }

  return (
    <>
    {modal &&
        <div className='modal'>
            <div onClick={toggleModal} className="overlay"></div>
            <div className='modal-content'>
                <h2>Hello World</h2>
                <div className="input-container">
                    <input className='city-input' type='text' value={input.city} placeholder='Enter City Name'/>
                    <input className='country-input' type='text' value={input.country} placeholder='Enter Country Name'/>
                </div>            
                <button onClick={handleSumit} className="change-btn">Change Location</button>            
            </div>
            
        </div>}
    </>
    
    
  )
}

export default Modal
