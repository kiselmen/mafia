import React, {Component} from 'react';
import axios from 'axios';

class Land extends Component {
    render() {
        const object = this.props.id;

        return (
            <div>Land Component: {JSON.stringify(object)}</div>
        );
    }
}

export default Land;
