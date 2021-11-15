/**
 * This is an example of how we can create a protected route. 
 * 
 * If the user is signed in, they will be able to view this route. If they are not signed in, they will be redirected to the sign-in form.
 */

import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

function Protected(props) {
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .catch(() => {
                // The user isn't signed in, so we need to redirect them by calling this:
                props.history.push('/profile')
            })
    }, []);
    return (
        <Container>
            <h1>Protected Route</h1>
        </Container>
    );
}

export default Protected;