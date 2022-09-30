import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Header.css';


const url = "https://netmedslogin.herokuapp.com/api/auth/userInfo"

class Header extends Component {

    constructor(){
        super()
 
        this.state={
            title:'Pharmaco',
            keywords:'Search medicines/Healthcare products @18% OFF',
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus','loggedOut');
        sessionStorage.removeItem('ltk');
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name,data.email,data.phone,data.role]
            sessionStorage.setItem('userInfo',outArray);
            sessionStorage.setItem('loginStatus','loggedIn');
            return(
                <>
                    <Link className="btn btn-primary" to="/"><span className="glyphicon glyphicon-user"></span>Hi {data.name}</Link>
                                &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}><span className="glyphicon glyphicon-log-out"></span> LogOut</button> 
                           
                </>
            )
        }else{
            return(
                <>
                    <Link className="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                                &nbsp;
                    <Link className="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link> 
                </>
            )
        }
    }

    render(){
        return(
            <>
                <div className="form-horizontal">
                    <div className="container-fluid">
                        <div className="header">
                            <Link to={`/`} className="navbar-brand" style={{color:'white', marginTop:'1%'}}>Pharmaco</Link>
                            <form className="example" action="">
                                <input onChange={this.handleChange} type="text" placeholder="Search medicines/Healthcare products @18% OFF" name="search"/>
                            </form>
                        </div>
                        <div className="user">
                            {this.conditionalHeader()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) =>{
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);