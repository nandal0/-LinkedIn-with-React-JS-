import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Login = () => {

    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { name, email, password, re_password } = formData;

    const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div  className="formdata">
        {/* <p>
        Make the most of your professional life
        </p> */}
        <div className='login'>
<h3>Sign in</h3>
<p>Stay updated on your professional world

</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    
                </div>
                {/* <label for="" className="labling">Email or phone number
</label>     */}
<div className='logininput'>
                    <input
                        className='form-control'
                        type="email"
                        placeholder='email'
                        name='email'
                        value={email}
                        onChange={e => onchange(e)}
                        minLength='6'
                        required
                    />
                </div>
                {/* <label for="" className="labling">Password (6 or more characters)
</label>     */}
                <div className='logininput'>
                    <input
                        className='form-control'
                        type="password"
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onchange(e)}
                        minLength='6'
                        required
                    />
                </div>
    <div className="forgot">
    <p>Forgot Password?</p>
    </div>
                <button className='register' type='submit'>Sign In</button>
               {/* <Link to='/'> <button className='back' type='submit'>Back</button></Link> */}
            </form>
            <p className='already'>
New to LinkedIn <Link to='/signin'>Join Now</Link>
            </p>
        </div>
    </div>
  )
}

export default Login