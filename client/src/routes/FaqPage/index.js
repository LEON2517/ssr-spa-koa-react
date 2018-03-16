import React, { Component } from 'react'
import Root from './components/Root'
import {articles} from './fixtures'

class VdsPage extends Component {

    render() {
        return(
            <div>
                <Root articles={articles}/>
            </div>
        )
    }
}

export default VdsPage