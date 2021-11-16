/**
 * This component will render profile information about the logged-in user. 
 * 
 * This will also be the component where we add the authentication component for signing up and signing in.
 */

import React, { useState, useEffect } from "react";
import Auth from "@aws-amplify/auth";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Container from "./Container";

function Profile() {
    useEffect(() => {
        checkUser()
    }, [])

    const [user, setUser] = useState({})
    async function checkUser() {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = { username: data.usernmae, ...data.attributes, }
            setUser(userInfo)
        } catch (err) { console.log('error: ', err) }
    }

    return (
        <Container>
            <h1>Profile</h1>
            <h2>Username: {user.username}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Phone: {user.phone_number}</h4>
            <AmplifySignOut />
        </Container>
    );
}

export default withAuthenticator(Profile);