    // import MyCart from "./MyCart";
    import {products} from "../data/products";
    // import {Link} from "react-router-dom";

    const Checkout = () => {
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 mt-5">
                        <h1 className="fw-bold">Checkout</h1>
                        <hr />
                        {products.map((product)=>{
                            return(
                                <div>
                                    <div className="card mb-3">
                                    <div className="row g-0 d-flex align-items-center">
                                        <div className="col-md-4 p-2">
                                            <img src={product.image} className="img-fluid rounded-3" alt="image1"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text fs-5 fw-bold">Rp. {product.price}</p>
                                            <p className="card-text">Quantity :</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="w-100 h-auto bg-info p-3 rounded-3">
                            <h4>Delivery Address</h4>
                            <h5 className="text-uppercase">Nur Muhamad Soleh</h5>
                            <p className="text-break text-start">Kp.Kligkit Rt:08/Rw:011 No.140 Gang Palem 2, Tempatnya Pak Narto Gas Kel.Rawa Buaya Kec.Cengkareng Jakarta Barat 11740</p>
                            <hr />
                            <div className="mt-3">
                                <form>
                                    <div className="mb-3">
                                    <label for="method delivery" className="form-label fw-bold">Delivery Method</label>
                                    <select className="form-select form-select-sm" id="method delivery">
                                        <option select>Choose Delivery Method</option>
                                        <option value="1">JNE</option>
                                        <option value="2">Gojek/Grab</option>
                                        <option value="3">Wahana</option>
                                    </select>
                                    </div>
                                    <div className="mb-3">
                                    <label for="method payment" className="form-label fw-bold">Payment Method</label>
                                    <select className="form-select form-select-sm" id="method payment">
                                        <option select>Choose Payment Method</option>
                                        <option value="1">OVO</option>
                                        <option value="2">Transfer</option>
                                        <option value="3">Gopay</option>
                                    </select>
                                    <hr/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2"> 
                                        <p>Subtotal</p>
                                        <h6 className="fw-bold">Rp. 71.000</h6>
                                    </div>
                                    <div className="d-flex justify-content-between"> 
                                        <p>Tax (10%)</p>
                                        <h6 className="fw-bold">Rp. 7.100</h6>
                                    </div>
                                    <div className="d-flex justify-content-between"> 
                                        <p>Delivery Cost</p>
                                        <h6 className="fw-bold">Rp. 15.000</h6>
                                    </div>
                                    <div className="d-flex justify-content-between"> 
                                        <p className="fw-bold fs-3">Grand Total</p>
                                        <h6 className="fw-bold fs-3">Rp. 78.100</h6>
                                    </div>
                                    <button type="button" className="btn btn-primary d-block mx-auto"  data-bs-toggle="modal" data-bs-target="#payment">Pay Now</button>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="modal fade" id="payment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content d-flex align-items-center">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Payment Successful!</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p className="text-center fw-bold">Your purchase have been paid!</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary d-block mx-auto" data-bs-dismiss="modal">OK</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    export default Checkout;