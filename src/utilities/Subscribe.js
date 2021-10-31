import React,{useState} from 'react';
import axios from 'axios';
import { SUBSCRIBE_PATH } from './Path';


const Subscribe =()=>
{
    const [email, setEmail] = useState()
    const [error, setError] = useState()
    const [already_In, setAlready_In] = useState()
    const [success, setSuccess] = useState()

    

        const subscribeEmail=(email)=>
        {
            axios.get(`${SUBSCRIBE_PATH}?email=${email}`)
            .then(res=>{

                if(!res.data.length)
                {
                    //post
                    axios.post(`${SUBSCRIBE_PATH}`,{email})
                    .then(res=>{
                        setSuccess(true)
                        setEmail('')
                    })
                    clearMessage()
                }
                else{
                   setAlready_In(true)
                   setEmail('')
                }
                clearMessage()
            })
        }
    
     const clearMessage=()=>
        {
            setTimeout(() => {
                setError(false)
                setSuccess(false)
                setAlready_In(false)
            }, 2000);
        }

    const SubmitForm =(e)=>
    {
        e.preventDefault();
      const emailValue=email
      //check email validation regix
      let regex= /\S+@\S+\.\S+/
        if(regex.test(emailValue))
        {
            subscribeEmail(emailValue)
            clearMessage()
        }
        else
        {
            setError(true)
        }

    }

   const emailHandler = (e)=>
   {
       setEmail(e.target.value)
   } 
    return (<div className='subcribe_panel'>
            <h3>
            SubScribe Us
            </h3>
            <div>
                <form onSubmit={SubmitForm}>
                    <input
                        type='text'
                        value={email}
                        placeholder='your@yahoo.com'
                        onChange={emailHandler}
                    />
                    <div className={error ? "error show" :'error'}>Email is Invalid</div>
                    <div className={success ? "success show" :'success'}>Thanks 😉</div>
                    <div className={already_In ? "success show" :'success'}>Already In</div>
                </form>
            </div>
            <small>
                some text where
            </small>
    </div>)
}

export default Subscribe