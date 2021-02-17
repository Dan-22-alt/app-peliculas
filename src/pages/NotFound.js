import React from 'react';

import { ButtonBackToHome } from '../components/ButtonBackToHome'
import { Footer } from '../components/Footer'

export const NotFound = () => {
    return(
        <div>
            <h1 className='title'>404!</h1>
            <h2 className='subtitle'>No existe la pagina</h2>
            <ButtonBackToHome />
            <Footer />
        </div>
    )
}