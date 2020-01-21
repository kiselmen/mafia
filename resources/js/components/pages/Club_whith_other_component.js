import React, {Component} from 'react';
import axios from 'axios';
import Land from './Land';

class Club extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', clubs: ''};
    }

    componentDidMount() {
        axios.get('/clubs')
            .then(response => {
                this.setState({ clubs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    tabRow() {
        console.log(this.state.clubs);
        if(this.state.clubs instanceof Array){
            return this.state.clubs.map(function(object, i){
                return (
                    <tr key={i}>
                        <td>
                            { i }
                        </td>
                        <td>
                            { object.name }
                        </td>
                        <td>
                            {object.typeclub.name}
                            <Land id={object} />
                        </td>
                        <td>
                            {object.land.name}
                        </td>
                        <td>
                            {object.town.name}
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
        return (
            <div>
                <h1>Список клубов</h1>

                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <input type="submit" value="Добавить" className="btn btn-success"></input>
                    </div>
                </div><br />
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Имя клуба</td>
                        <td>Тип клуба</td>
                        <td>Страна</td>
                        <td>Город</td>
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