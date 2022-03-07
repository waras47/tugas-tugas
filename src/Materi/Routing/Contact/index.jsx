import React from 'react';
import './index2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Form} from "react-bootstrap";

export default class Contact1 extends React.Component {
    render() {
        return (
        <div>

            <h3 class="text-center fw-bold fs-2">Contact</h3>
            <div class="card mx-auto " style={{width: "700px"}}>
            <form className='mt-5'>
                <div class="mb-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </div>
                <div class="mb-3">
                    <label for="floatingTextarea">Message</label>
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    
                </div>
 
                <div class="d-grid gap-2">
                    <button class="btn btn-primary border-dark shadow-sm text-white px-3 py-2 mt-3">
                        Send
                    </button>
                </div>             
              </form>
        </div>


      </div>

        )
    }
}