import React, { Component } from 'react'
import { getMovies } from './MovieService'

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies(),
            currentSearchText:'',
            // filterMovies:getMovies(),
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
        this.setState({
            currentSearchText:val
        })
        // if(val == '')
        // {
        //     this.setState({
        //             filterMovies:this.state.movies
        //             ,currentSearchText:''
        //         })
        //         return;
        // }
        // let  filteredArr = this.state.movies.filter(movieObj=>{
        //     let title = movieObj.title.trim().toLowerCase();
        //     // console.log(title);
        //     return title.includes(val.toLowerCase());
        // })

        // this.setState({
        //     filterMovies:filteredArr,
        //     currentSearchText:val
        // })
        // this.setState({currentSearchText:val});
    }
    render() {
        let {movies , currentSearchText} = this.state;
        let filterMovies = [];
        if(currentSearchText != '')
        {
            filterMovies = movies.filter(movieObj=>{
                    let title = movieObj.title.trim().toLowerCase();
                    // console.log(title);
                    return title.includes(currentSearchText.toLowerCase());
                })
        }
        else
        {
            filterMovies = movies;
        }
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-3">
                        <h1>Hello</h1>
                    </div>
                    <div className="col-9">
                        <input onChange={this.handleChange} type='text'></input>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">
                                    <i className="fas fa-sort-up"></i>
                                    Stock
                                    <i className="fas fa-sort-down"></i>
                                        </th>
                                    <th scope="col">
                                    <i className="fas fa-sort-up"></i>
                                    Rate
                                    <i className="fas fa-sort-down"></i>
                                    </th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterMovies.map(moviesObj => (
                                        <tr scope='row' key={moviesObj._id}>
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
