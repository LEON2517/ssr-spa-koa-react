import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Footer from '../../../Footer'
import PageRouter from '../PageRouter'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import NavList from '../NavList'
import './style.css'

class Solutions extends Component {
    static propTypes = {

    };

    render() {

        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="text__padding">
                        <h4 id="fat">@fat</h4>
                        <p>.777Исключительное использование adodisizing autatus autore excepteur occaecat ullamco duis aliqua id magna ullamco eu. Уверенность в том, что касается ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat labum incididunt tempor eu ensat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut after the deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commo velit ut eiusmod cupidatat elit dolore...</p>
                    </div>
                    <PageRouter/>
                    <Footer/>
                </div>
            </div>

        )
    }

}

export default Solutions