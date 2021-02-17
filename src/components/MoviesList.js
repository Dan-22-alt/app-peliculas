import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { Movies } from './Movies'

export class MoviesList extends Component {
    static propTypes= {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props
        return (
            <div className="MoviesList">
                {
                movies.map(movie => {
                return (
                    <div key={movie.imdbID} className="MoviesList-item">
                        <Movies 
                        id={movie.imdbID}    
                        title={movie.Title}
                        poster={movie.Poster}
                        year={movie.Year} 
                        />
                    </div>
                    )
                })
            }
            </div>
        )
    }    
}

