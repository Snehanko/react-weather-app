import React,{useState} from 'react'
import './modal.scss'

function Modal({setCityData}) {

    const [modal,setModal]=useState(true);

    const [input,setInput] =useState({  //child State
        city:"",
        country:""
    });

    const toggleModal =()=>{
        setModal(!modal);
    }

    const onChange=(e)=> {
        setInput({...input,[e.target.name]:e.target.value})
        
    }
    const handleSumit = () =>{ 
        setCityData(input);            
        toggleModal();
    }

  return (
    <>
    {modal &&
        <div className='modal'>
            <div onClick={toggleModal} className="overlay"></div>
            <div className='modal-content'>
                <h2>Hello World</h2>
                <div className="input-container">
                    <input name="city" className='city-input' type='text' value={input.city} placeholder='Enter City Name' onChange={onChange}/>
                    <input name="country" className='country-input' type='text' value={input.country} placeholder='Enter Country Name'onChange={onChange}/>
                </div>            
                <button onClick={handleSumit} className="change-btn">Change Location</button>            
            </div>
            
        </div>}
    </>
    
    
  )
}

export default Modal
