import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signin} from './../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SigninPage(props) {
console.log("🚀 ~ file: SigninPage.jsx ~ line 9 ~ SigninPage ~ props", props)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ?
        props.location.search.split('=')[1] :
        '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfos, loading, error}  = userSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        // To Do SignIn action
        dispatch(signin(email, password));
    }   

    useEffect(() => {
        if(userInfos) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfos]);


    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
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
