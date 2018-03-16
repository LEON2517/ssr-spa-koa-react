import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import WhyVps from '../WhyVds'
import Solutions from '../Solutions'
import './style.css'

class Nav extends Component {

    render() {
        const {article, toggleOpen} = this.props;

        return (
            <div className="">
                <h3 className="nav__title_h3" onClick = {toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                <div>
                    <div><NavLink to="/vds/why-vds" className="nav_link" activeStyle={{fontWeight: 700, color:'#1a1a1a'}}>{this.props.article.title1}</NavLink></div>
                    <div><NavLink to="/vds/solutions" className="nav_link" activeStyle={{fontWeight: 700, color:'#1a1a1a'}}>{this.props.article.title2}</NavLink></div>
                </div>
            </div>
        )
    }

}

export default Nav