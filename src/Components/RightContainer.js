import React, { useState } from 'react'
import './RightContainer.css'
function Rightcontainer() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [skill, setSkill] = useState('');
    let [nameErr, setNameErr] = useState(false);
    function nameHandler(e) {
        const number = e.target.value;
        setFullName(e.target.value);
        if (number.length < 5) {
            setNameErr(true);
        }
        else {
            setNameErr(false);
        }

    }
    function loginHandle(e) {
        document.querySelector(".right-top").textContent = "You have successfully subscribed to our plan";

    }
    const validate = () => {
        return fullName.length & email.length & password.length;


    };

    return (
        <>
            <div className='right-top'>
                <span id='msg'>Try it free 7 days</span> then ₹180/mo. thereafter
            </div>
            <div className="right-bottom">
                <form className='detail' onSubmit={loginHandle}>
                    <input id='name' type='text' placeholder='FullName' onChange={nameHandler} />{nameErr ? <span>Invalid FullName</span> : ""}
                    <br />
                    <br />
                    <input id='email' type='email' placeholder='Email Address' onChange={e => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input id='password' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <select name='skill' id='skill' onChange={e => setSkill(e.target.value)}>
                        <option value='' selected disabled hidden>  Choose your skills</option>
                        <option value='HTML'> HTML</option>
                        <option value='CSS'> CSS</option>
                        <option value='JAVASCRIPT'> JAVASCRIPT</option>
                    </select>
                    <br />
                    <br />
                    <button type='submit' id='sub' disabled={!validate()}> CLAIM YOUR FREE TRIAL</button>
                    <br />
                    <label id='terms'>By clicking the button you are agreeing to our <span id='termscolor'>Terms and Services</span></label>
                </form>

            </div>

        </>
    )
}

export default Rightcontainer