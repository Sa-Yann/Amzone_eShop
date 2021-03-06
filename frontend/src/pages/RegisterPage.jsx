import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { register} from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function RegisterPage(props) {
// console.log("🚀 ~ file: SigninPage.jsx ~ line 9 ~ SigninPage ~ props", props)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const redirect = props.location.search ?
        props.location.search.split('=')[1] :
        '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfos, loading, error}  = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmedPassword) {
            alert(`Password and confirmed Password don't Match`)
        } else {
            dispatch(register(name, email, password));
        }
       
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
                    <h1>Create an Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"  id="name" 
                        placeholder="Enter name" 
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <label htmlFor="confirmedPassword">Confirmed Password</label>
                    <input type="password"  id="confirmedPassword" 
                        placeholder="Enter Confirmed Password" 
                        required
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label />
                    <button type="submit" className="primary">Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an Account{' '}: <Link to={`/signin?redirect=${redirect}`}> Go to Signin</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
