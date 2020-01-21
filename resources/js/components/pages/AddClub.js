import React, {Component} from 'react';
import axios from "axios";
import Land from "./Land";

let id = '';

class AddClub extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club:'',name:'',town:'',land:'',typeclub:'',townname:'',landname:'',img:'',
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        id = this.props.match.params.id;
        axios.get(`/clubs/${id}`).then(res=>{
            this.setState({
                club: res.data,
                name: res.data.name,
                town: res.data.town,
                land: res.data.land,
                img:  res.data.img,
                typeclub: res.data.typeclub,
            });
        }).catch(errors=>{
            console.log(errors);
        });

    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    handleImgChange(e){
        this.setState({
            simg: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.state.club.id,
            name: this.state.name,
        };
        console.log(`/clubs/${this.props.match.params.id}`);
        axios.put(`/clubs/${this.props.match.params.id}`, obj)
            .then(res => console.log(res.data));

        console.log(this);

    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card bg-dark text-white">
                            <div className="card-header">Редактирование клуба</div>

                            <div className="card-body bg-light text-dark">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Ник</label>

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
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-secondary">
                                                Сохранить
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default EditClub
