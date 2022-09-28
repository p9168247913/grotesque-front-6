import React,{Component} from 'react';
import Header from '../../Header'

const url = "https://netmedslogin.herokuapp.com/api/auth/register"

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
            <Header/>
                <div className="container" style={{height:'290px'}}>
                    <br/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Register Form
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="fname">Name</label>
                                        <input className="form-control" id="fname" required name="fname" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="lname">Phone</label>
                                        <input className="form-control" id="lname" name="lname" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="email">Email</label>
                                        <input className="form-control" id="email" type="email"
                                        name="email" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="password">Password</label>
                                        <input className="form-control" id="password" type="password"
                                        name="password" onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success" style={{float:'left'}} onClick={this.handleSubmit}>Register</button>
                        </div>
                    </div>  
                </div>
            </>
        )
    }
}

export default Register