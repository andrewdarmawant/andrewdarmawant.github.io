import React, {Component} from 'react';
import "./Heroimg2style.css";
import Transitions from './Transitions'

class Heroimg2 extends Component {
    render() {
        return (
            <Transitions>
            <div className='hero-img shadow-light'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p> {this.props.text}</p>
                </div>
            </div>
            </Transitions>
        )
    }
};

export default Heroimg2;