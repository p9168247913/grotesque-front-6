import React,{Component} from 'react';
import './Categories.css';
import CategoriesDisplay from './CategoriesDisplay';
import Header from '../../Header';


const url = "https://netmedsapi.herokuapp.com/product"

class Categories extends Component {
    constructor(){
        super()

        this.state={
            category:''
        }
    }
    render(){
        return (
            <>
                <Header/>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.ibb.co/xhN1RPX/slideshow1.jpg" alt="Los Angeles" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/WKGw6mR/slideshow2.jpg" alt="Chicago" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/3CZFh38/slideshow3.jpg" alt="New York" className="d-block w-100"/>
                        </div>
                    </div>
                    <div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="categories">
                    <p style={{marginLeft: '4%', color:'#39b76b', fontSize:'30px', fontWeight:'bolder'}}>Top categories</p>
                    <CategoriesDisplay productData = {this.state.category}/>
                </div>
                
            </>
        )
    }

    
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({category:data})
        })
    }  
    
}

export default Categories