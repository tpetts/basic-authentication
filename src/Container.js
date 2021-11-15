/**
 * This file will hold a component to apply reusable styling to other components
 */

import React from "react";

const Container = ({ children }) => (
    <div style={styles.container}>
        { children }
    </div>
)

const styles = {
    container: {
        margin: '0 auto',
        padding: '50px 100px'
    }
}

export default Container;