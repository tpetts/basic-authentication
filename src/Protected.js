/**
 * This is an example of how we can create a protected route. 
 * 
 * If the user is signed in, they will be able to view this route. If they are not signed in, they will be redirected to the sign-in form.
 */

import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import image from './img/mario_chinchilla.png';


const Protected = (props) => {
    useEffect( () => {
        // if the user is signed in...
        Auth.currentAuthenticatedUser()
            // if the user isn't signed in...
            .catch(() => {
                // The user isn't signed in, so we need to redirect them by calling this:
                props.history.push('/profile')
                console.log(props);
            })
    }, []);// [] = just run this when the component loads, don't run this repeatedly...


    return (
        <Container>
            <h1>Protected Route</h1>
            <h2>You're Welcome.</h2>
            <img src={image} alt="A cute fluffy chinchilla" />
        </Container>
    );
}

export default Protected;