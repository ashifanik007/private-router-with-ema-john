import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
<div className='form-container'>

<div>
    <h1 className='form-title'>Sing Up</h1>
    <form action="">
        <div className='input-group'>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id=""  required/>
        </div>
        <div className='input-group'>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" required />
        </div>
        <div className='input-group'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="confirmPassword" name="" id=""  required/>
        </div>
        <input className='form-submit' type="submit" value="Sing Up" />
    </form>
    <p>
        Already have an account? <Link className='form-link' to='/login'>Log in</Link>
    </p>
</div>
</div>
    );
};

export default SignUp;