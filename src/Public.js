/**
 * This is the basic route that will be viewable whether or not the user is signed in. 
 */

import React from "react";
import Container from "./Container";
import image from './img/chinchilla.png';

const Public = () => {
    return (
        <Container>
            <h1>Public Route</h1>
            <h2>Meet the cutest animal in the world...the chinchilla!</h2>
            <img src={image} alt="A cute fluffy chinchilla" />
        </Container>
    )
}

export default Public;