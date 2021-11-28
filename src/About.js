/**
 *  This is the extra 'more public' page that is in the project 5 specifications
 */

import { container } from "@aws-amplify/ui";
import React from "react";
import Container from "./Container";

const About = () => {

    return(
        <Container>
            <h1>About Chinchillas</h1>

            <section>
                <h2>Habitat</h2>

                <p>
                Chinchillas are covered in thick fur for a reason. In the Andes, they can live in elevations of about 3,000 to 5,000 meters (9,800 to 16,400 feet). At those heights, it can be very cold — 23 degrees Fahrenheit (minus 5 degrees C) is the average minimum temperature in some places. Chinchillas can tolerate freezing temperatures, but they cannot survive in temperatures higher than 80 F (27 C); high temperatures and humidity can cause these rodents to suffer from heat stroke.

                Chinchillas are crepuscular and nocturnal, which means they are very active at dawn or dusk and sleep during the day. They make their homes by burrowing in underground tunnels or nestling in rock crevasses. They are very social and live in colonies that consist of hundreds of chinchillas. 

                Females tend to be aggressive toward other females. When females are ready to mate, they can also be aggressive toward males, and are the dominant of the two genders. Females are mostly monogamous; they have only one mate throughout their lives. Males, on the other hand, can have many female mates. This is especially true of domesticated males. Often, one male is bred with many females to create many offspring to sell. 
                </p>
            </section>

            <section>
                <h2>Diet</h2>

                <p>
                    Chinchillas need a combination of Timothy and Alfalfa hay in an unlimited amount. They also need access to Oxbow pellets to offset their nutrition. Chinchillas can have treats such as dried rose hips, hibiscus,dandelion leaves, nuts, seeds, and dried fruit. Treats such as that need to be given very sparingly as chinchillas cannot metabolize sugars very well.
                </p>
            </section>

            <span>
                <a href="https://www.livescience.com/28131-chinchillas.html">Credit to: livescience.com</a>
            </span>
        </Container>
    )

};

export default About;