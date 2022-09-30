import React,{Component} from 'react';
import './Deals.css'

class Deals extends Component{
    render(){
        return(
            <>
                <div className="safetymeasures">
                    <div className="safety1">
                        <img src="https://i.ibb.co/j8n2DgV/safety-assured.png" alt=""/>
                    </div>
                    <div className="safety">
                        <img src="https://i.ibb.co/vcMfDnT/no-contact-delivery.png" alt=""/>
                    </div>
                    <div className="safety">
                        <img src="https://i.ibb.co/vqprrpL/regular-sanitization.png" alt=""/>
                    </div>
                    <div className="safety">
                        <img src="https://i.ibb.co/DbMLj9F/secure-packaging.png" alt=""/>
                    </div>
                    <div className="safety">
                        <img src="https://i.ibb.co/qy3p9Q4/stored-safely.png" alt=""/>
                    </div>
                    <div className="safety">
                        <img src="https://i.ibb.co/z2VJPgR/temperature-checks.png" alt=""/>
                    </div>
                </div>
                <div className="deals">
                    <div className="dealarea">
                        <img src="/images/deal/deal.svg" alt=""/>
                        <h4>Deal of the Day</h4>
                        {/* <h4 id="demo"></h4> */}
                    </div>
                    <div className="row">
                        <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-4">
                            <div className="card" id="card">
                                <div className="card1">
                                    <div className="cardborder">
                                        <div className="offerimg">22% OFF!</div>
                                        <img src="/images/deal/Cetaphil.webp" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Cetaphil Baby Massage Oil-200ml</h6>
                                        <p className="card-text">MRP <strike>₹580</strike><b>₹450</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-4">
                            <div className="card" id="card1">
                                <div className="card1">
                                    <div className="cardborder">
                                        <div className="offerimg">10% OFF!</div>
                                        <img src="/images/deal/digene.webp" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Digene Gel Acidity & Gas Relief-200ml </h6>
                                        <p className="card-text">MRP <strike>₹131</strike><b>₹117</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-4">
                            <div className="card" id="card2">
                                <div className="card1">
                                    <div className="cardborder">
                                        <div className="offerimg">18% OFF!</div>
                                        <img src="/images/deal/DrVaidya's Alovera Juice.webp" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">DrVaidya's Alovera Juice</h6>
                                        <p className="card-text">MRP <strike>₹250</strike><b>₹205</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-4">
                            <div className="card" id="card3">
                                <div className="card1">
                                    <div className="cardborder">
                                        <div className="offerimg">15% OFF!</div>
                                        <img src="/images/deal/Dabur.webp" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Dabur Shwaasamrit 400gm</h6>
                                        <p className="card-text">MRP <strike>₹350</strike><b>₹298</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-4">
                            <div className="card" id="card4">
                                <div className="card1">
                                    <div className="cardborder">
                                        <div className="offerimg">18% OFF!</div>
                                        <img src="/images/deal/Horlicks.webp" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Horlicks Health & Nutrition Drink</h6>
                                        <p className="card-text">MRP <strike>₹350</strike><b>₹280</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-4">
                            <div className="card" id="card5">
                                <div className="card1">
                                    <div className="cardborder">
                                        <div className="offerimg">20% OFF!</div>
                                        <img src="/images/deal/Volini.webp" className="card-img-top" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">Volini All Round 360 Action Spray Bottle</h6>
                                        <p className="card-text">MRP <strike>₹208</strike><b>₹165</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </>
        )
    }
}

export default Deals