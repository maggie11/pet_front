import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import Main from '@pages/Main'

const renders = Component => {
    render(
        <AppContainer>
            <Component/>
        </AppContainer>, document.getElementById('app')
    )
}

renders(Main)

