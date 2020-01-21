import React, {Component} from 'react';
import axios from 'axios';
import Land from './Land';

class Club extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', clubs: '', currentClub: null};
        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectClub = this.onSelectClub.bind(this);
    }

    componentDidMount() {
        axios.get('/clubs?q=')
            .then(response => {
                this.setState({ clubs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onInputChange(e) {
        console.log(e.target.value);
        axios.get('http://localhost:8000/clubs?q=' + e.target.value)
            .then(response => {
                this.setState({ clubs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onSelectClub(e) {
        e.preventDefault();
        this.setState({ currentClub: e.target.id });
    }

    tabRow() {
        console.log(this.state.clubs);
        if(this.state.clubs instanceof Array){
            return this.state.clubs.map((object, i) =>{
                return (
                    <tr key={i}>
                        <td>
                            { i }
                        </td>
                        <td>
                            <input type="button" id={i} onClick={this.onSelectClub} value={ object.name } />
                        </td>
                        <td>
                            {object.land.name}
                            <Land id={object} />
                        </td>
                        <td>
                            <form>
                                <input type="submit" value="Изменить" className="btn btn-success"/>
                            </form>
                        </td>
                    </tr>
                );
            })
        }
    }

    render() {
        const clubs = this.state.clubs;
        const currentClub = this.state.currentClub;
        const currentClubName = clubs && clubs[currentClub] && clubs[currentClub].name;
        return (
            <div>
                <h1>Список клубов</h1>

                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <input type="submit" value="Добавить" className="btn btn-success"></input>
                    </div>
                </div><br /><br />
                <div>Enter club: <input type="text" onChange={this.onInputChange} /></div>
            <br /><br />
            <div>Current club: {currentClubName}</div>
                <br /><br />
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Имя клуба</td>
                        <td>Тип клуба</td>
                        <td width="200px">Действие</td>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Club