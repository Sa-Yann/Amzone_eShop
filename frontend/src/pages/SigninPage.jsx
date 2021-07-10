import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function SigninPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        // To Do SignIn action
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
                        onChnage={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" 
                        placeholder="Enter password" 
                        required
                        onChnage={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label />
                    <button type="submit" className="primary">Sing In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer : <Link to="/register"> Create an Account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SigninPage
