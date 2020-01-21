import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

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
        if(this.state.clubs instanceof Array){
            return this.state.clubs.map(function(object, i){
                return (
                    <tr key={object.id}>
                        <td>
                            { object.name }
                        </td>
                        <td>
                            {object.typeclub.name}
                        </td>
                        <td>
                            {object.land.name}
                        </td>
                        <td>
                            {object.town.name}
                        </td>
                        <td>
                            <form>
                                <Link className="nav-link js-scroll-trigger" to={`/club/${object.id}`}>Изменить</Link>
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
                        <Link className="nav-link js-scroll-trigger" to={'/addclub'}>Добавить</Link>
                    </div>
                </div><br />
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Имя клуба</th>
                            <th>Тип клуба</th>
                            <th>Страна</th>
                            <th>Город</th>
                            <th width="200px">Действие</th>
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