import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'
import { Footer } from '../components/Footer'

const API_KEY = '75cf9de2'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string 
        })
    }

    state = { movie: {}}

    _fetchMovie ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })
            })
    }

    componentDidMount () {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    render() {
        const  { Title, Poster, Actors, Metascore, Plot } =
        this.state.movie

        return(
            <div>
                {/* <button onClick={this._goBack}>Volver al inicio</button> */}
                <ButtonBackToHome />
                <h1 className='title'>{Title}</h1>
                <div className='detail'>
                    <div className='detdiv-1'>
                        <img className="card-poster" src={Poster} />
                    </div>
                    <div className='detdiv-2'>                
                        <p className='plot'>Plot: {Plot}</p>
                        <h3 className='cast'>Cast: {Actors}</h3>
                        Metascore:<span className='score'> {Metascore}</span>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
