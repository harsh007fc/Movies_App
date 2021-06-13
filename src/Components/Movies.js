import React, { Component } from 'react'
import { getMovies } from './MovieService'

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies(),
            currentSearchText:''
        }
    }

    onDelete = (id) => {
        let filterArr = this.state.movies.filter(movieObj => {
            return movieObj._id != id
        }
        )

        this.setState({
            movies:filterArr,
        })
    }

    handleChange = (e) =>{
        let val = e.target.value;
        this.setState({currentSearchText:val});
    }
    render() {

        return (
            <div className="container">
                <div className='row'>
                    <div className="col-3">
                        <h1>Hello</h1>
                    </div>
                    <div className="col-9">
                        <input onChange={this.handleChange} type='text'></input>
                        <table class="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.movies.map(moviesObj => (
                                        <tr scope='row'>
                                            <td>{moviesObj.title}</td>
                                            <td>{moviesObj.genre.name}</td>
                                            <td>{moviesObj.numberInStock}</td>
                                            <td>{moviesObj.dailyRentalRate}</td>
                                            <td><button onClick={() => this.onDelete(moviesObj._id)} type="button" className="btn btn-outline-danger">Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
