import React, {Component} from 'react'
import Nav from './Nav'
import accordion from '../../../decorators/accordion'


class NavList extends Component{
    render() {
        const {openItemId, toggleOpenItem, articles} = this.props
        const navElements = articles.map(article => (
            <li key={article.id}>
                <Nav
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {navElements}
            </ul>
        )

    }
}

export default accordion(NavList)