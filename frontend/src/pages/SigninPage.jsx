import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { signin} from './../actions/userActions';

function SigninPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        // To Do SignIn action
        dispatch(signin(email, password));
    }   

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"  id="email" 
                        placeholder="Enter email" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" 
                        placeholder="Enter password" 
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label />
                    <button type="submit" className="primary">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer{' '}: <Link to="/register"> Create an Account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SigninPage
