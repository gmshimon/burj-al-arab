import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import './login.css';

const Login = () => {
    const {signInWithEmail, signUpWithGoogle} = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const location_url = location.state?.from || '/home';

    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmail(email, password)
            .then(result => {
                history.push(location_url);
                console.log(result.user);
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleGoogleSignUp = () => {
        signUpWithGoogle();
    }

    return (
        <div className="form-container">
            <form action="/action_page.php" onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input onChange={handleEmail} type="text" id="lname" name="Email" placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input onChange={handlePassword} type="password" id="lname" name="Email" placeholder="password" />

                <input type="submit" value="Submit" />
            </form>
            <p>new user? <Link to="/register">Register</Link> </p>
            <button onClick={handleGoogleSignUp}>Google sign up</button>
        </div>
    );
};

export default Login;