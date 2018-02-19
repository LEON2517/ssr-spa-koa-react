import React, {Component} from 'react'
import Header from '../../Header'
import Solutions from './Solutions'
import WhyVds from './WhyVds'
import NavList from './NavList'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'

export default class Root extends Component {

    render() {
        const {articles} = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <Header/>
                    <div className="col-9 col-9__padding">
                        <Switch>
                            <Redirect from="/vds" exact to="/vds/why-vds"/>
                            <Route path="/vds/why-vds" component={WhyVds}/>
                            <Route path="/vds/solutions" component={Solutions}/>
                        </Switch>
                    </div>
                    <div className="col-3 why-vps__bg_color">
                        <div className="fixed-right">
                            <NavList articles={articles}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}