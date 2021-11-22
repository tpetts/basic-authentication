/**
 * This is the basic route that will be viewable whether or not the user is signed in. 
 */

import React from "react";
import Container from "./Container";

const Public = () => {
    return (
        <Container>
            <h1>Public Route</h1>
        </Container>
    )
}

export default Public;