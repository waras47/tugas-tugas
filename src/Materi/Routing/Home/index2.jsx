import React from 'react';
import './index2.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends React.Component {
    render() {
        return (
            <div>
               
                <div className="ps-5 mb-4 bg-light rounded-3 jumbotron">
                <div className="container-fluid py-5 text-center  text-white">              
                    <p className=" fs-5 fst-italic mt-5">
                    progammer | developer | designer
                    </p> 
                    <h1 className="name">WAHYUDIN</h1>
    
                    <button class="btn btn-primary border-dark btn-sm shadow-sm text-white px-3 py-2 mt-5">
                        Linkedin Wahyudin
                    </button>             
                </div>
            </div>
            



            <div class="container-fluid bg-dark mt-5 mb-0">
                <footer>
                    <p class="text-white text-center footer">&copy; 2021 Eduwork, Inc. All rights reserved.</p>
                </footer>
            </div>
                </div>

        )
    }
}