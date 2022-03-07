import React from 'react';
import './index2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container} from "react-bootstrap";
const About = () => {
        return (
            <div>

            <Container>
                <h3 class="fw-bold fs-2 text-center">My Bio</h3>
                    <p class="fs-6 fst-italic fs-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptates 
                    tempora odit necessitatibus perspiciatis rerum expedita, 
                    alias architecto quia beatae laudantium cum a nemo non. Fugiat ab iste saepe ducimus!
                    </p>  

                <div class="row text-center mt-5">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h6 class="fs-5 fw-bold">Bed cum wheel chair</h6>
                        <p class="fw-light text-center">Created a bed cum wheelchair model which will be very useful for
                            patients who cannot move from bed and does not need anybody to make
                            them lay in bed</p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h6 class="fs-5 fw-bold">Rock Paper Scissor game</h6>
                        <p class="fw-light" >
                        Created a Rock Paper Scissor game in Python language.This was my
                        first project in python.Learning Machine learning with python
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <h6 class="fs-5 fw-bold">Volunteer in NSS</h6>
                        <p class="fw-light">
                        I am a NSS volunteer and I am doing social activities with the help
                        of our institution. I Went to Eripatti,Pollachi and renowated
                        schools and the surrounding areas along with my student friends.
                        </p>
                    </div>
                </div>
            </Container>
        </div>

        )
    
}

export default About;