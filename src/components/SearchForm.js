import React, { Component } from 'react'

const API_KEY = '75cf9de2'

export class SearchForm extends Component{
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        // alert(this.state.inputMovie)
        const { inputMovie } = this.state
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                // console.log(results)
                const { Search = [], totalResults = "0" } = results
                console.log({ Search, totalResults})
                this.props.onResults(Search)
            })
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Pelicula a encontrar" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Buscar
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
