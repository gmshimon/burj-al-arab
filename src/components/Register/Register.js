import React from 'react';
import {getAuth, updateProfile} from "firebase/auth";
import {useState} from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import './register.css';
import initializeAuthentication from '../../Firebase/firebase.init';
import {useHistory} from 'react-router';

initializeAuthentication();
const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const {user, signUpWithEmail} = useFirebase();

    const history = useHistory();
    const location_url = '/login';

    const handleSignUP = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            console.log('length must be at least 6');
            setPassword('');
            return;
        }
        signUpWithEmail(name, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('success')
                console.log(user);
                setUserName(name);
                history.push(location_url);
            })
        const setUserName = (name) => {
            updateProfile(auth.currentUser, {
                displayName: name,
            })
                .then(() => {})
        }
        user.email && console.log('success');
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div className="form-container">
            <form action="/action_page.php" onSubmit={handleSignUP}>
                <label htmlFor="fname">Name</label>
                <input onChange={handleName} type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="Email">Email</label>
                <input onChange={handleEmail} type="text" id="lname" name="Email" placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={handlePassword} type="password" id="lname" name="Email" placeholder="password" />

                <input type="submit" value="Sign up" />
            </form>


        </div>
    );
};

export default Register;