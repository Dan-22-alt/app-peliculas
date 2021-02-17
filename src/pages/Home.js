import React, { Component } from 'react'

import  { Title } from '../components/Title';
import  { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList'
import { Footer } from '../components/Footer'

export class Home extends Component{
    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
      this.setState({ results, usedSearch: true })
    }
  
    _renderResults () {
      return this.state.results.length === 0 
        ? <p>Lo sentimos! No hemos encontrado ningun resultado</p>
        : <MoviesList movies={this.state.results} />
      
    }

    render() {
        return (
            <div className='divHome'>
                <Title>Encuentra tus peliculas</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch 
                    ? this._renderResults()
                    : <small>Use el buscador para encontar una pelicula</small>
                }
                <Footer />
            </div>
        )
    }
}