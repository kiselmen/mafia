import React, {Component} from 'react';
import axios from 'axios';

class Land extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', lands: ''};
        console.log(this);
    }

    componentDidMount() {
        axios.get('/lands')
            .then(response => {
                this.setState({ lands: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this);
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    tabRow() {
        if(this.state.lands instanceof Array){
            return this.state.lands.map(function(object, i){
                return (
                    <option value={i}>{object.name}</option>
                );
            })
        }
    }

    render() {
        const landid   = this.props.landid;
        const landname = this.props.landname;
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Страна регистрации</label>

                    <div className="col-md-6">
                        <input
                            id="name"
                            type="text"
                            value={this.state.name}
                            onChange = {this.handleNameChange.bind(this)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="town" className="col-md-4 col-form-label text-md-right">Страна регистрации</label>

                    <div className="col-md-6">
                        <select className="custom-select" name="land">
                            { this.tabRow() }
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Land;
