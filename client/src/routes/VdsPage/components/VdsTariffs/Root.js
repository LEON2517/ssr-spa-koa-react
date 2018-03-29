import React, {Component} from 'react'
import TariffsInfo from './TariffsInfo'
import TariffsForm from './TariffsForm'

class Root extends Component {

    render() {
        return(
            <div>
                <TariffsInfo/>
                <TariffsForm/>
            </div>
        )
    }
}

export default Root