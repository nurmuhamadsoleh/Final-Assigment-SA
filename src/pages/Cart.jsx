// import { Link } from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import { products } from "../data/products";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import { useParams } from "react-router";


// import { products } from "../data/products"

class Cart extends React.Component{
    state = {
        title: "Cart",
        quantity : 0,
        productDetail: {}
    }
    handleMinus = () => {
        if(this.state.quantity > 0){
            this.setState({
                quantity : this.state.quantity - 1
            })
        }
    }
    handlePlus= () => {
        const stock = 20;
        if(this.state.quantity < stock){
            this.setState({
                quantity : this.state.quantity + 1
            })
        }
    }
    render(){
        // const {productDetail} = this.state;
        return(
            <div className="container mt-5">
            <div className="row">
                <div className="col-sm-8 mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                    <h1 className="fw-bold">
                        My Cart
                    </h1>
                    <h5 className="fw-bold text-capitalize">Delete Selected <FontAwesomeIcon icon={faTrashAlt}/></h5>
                    </div>
                    <hr />
                    {products.map((product)=>{
                        return (
                            <div>
                                <div className="card mb-3 d-flex justify-content-between">
                                    <div className="row g-0">
                                            <div className="col-sm-4 p-2">
                                                <img src={product.image} className="img-fluid rounded-3 w-100" alt="Image1"/>
                                            </div>
                                            <div className="col-sm-6 d-flex ms-1">
                                                <div className="card-body">
                                                <h5 className="card-title fw-bold">{product.title}</h5>
                                                <p className="card-text">Rp. {product.price}</p>
                                            </div>
                                            <div className="col-sm-2 mt-3">
                                            <div className="input-group">
                                                <button   type="submit" className="btn btn-danger p-3" onClick={(e)=>{this.handlePlus(e); e.preventDefault()}}>+</button>
                                                <input type="number" aria-label="First name" className="form-control w-50 text-center" value={this.state.quantity}/>
                                                <button className="btn btn-danger p-3"  onClick={(e)=>{this.handleMinus(e); e.preventDefault()}}>-</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
                <div className="col-sm-4">
                    <div className="bg-info p-3 rounded-3 mt-5">
                        <div>
                            <div className="d-flex justify-content-between mt-2"> 
                                <p>Subtotal</p>
                                <h6 className="fw-bold">Rp. 71.000</h6>
                            </div>
                            <div className="d-flex justify-content-between"> 
                                <p>Tax (10%)</p>
                                <h6 className="fw-bold">Rp. 7.100</h6>
                            </div>
                            <p className="fw-normal fs-6">Grand Total</p>
                            <h1 className="fw-bold fs-2 text-end">Rp. 78.100</h1>
                            <Link to="/checkout" className="btn btn-primary d-block mx-auto fw-bold mt-3">Checkout Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const ProductCart = () => {
    const params = useParams();
    const idProduct = params.id;
    return(
        <Cart productId={idProduct} />
    )
}
export default ProductCart;