import React, { Component } from 'react'
import { getMovies } from './MovieService'

export default class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:getMovies(),
        }
    }
    render() {
        
        return (
            <div className='row'>
                <div className="col-3">
                   <h1>Hello</h1>
                </div>
                <div className="col-9">
                   <input type="text" /> 
                </div>
            </div>
        )
    }
}
