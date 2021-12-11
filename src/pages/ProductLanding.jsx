import MyCart from "./MyCart";
import {products} from "../data/products";
import {Link} from "react-router-dom";

const ProductLanding = () => {
    return(
        <div className="container mt-5" style={{marginTop:"20px"}}>
            <div className="row">
                <div className="col-sm-3 bg-info rounded-3 h-75 me-1 mt-5">
                    <h4 className="mt-3">Category</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="book"/>
                            Buku
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="kitchen"/>
                            Dapur
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="gadget"/>
                            HandPhone
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="computer"/>
                            Computer / Laptop
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="fashion"/>
                            Fashion
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="music"/>
                            Music
                        </li>
                    </ul>
                    <label for="price" className="form-label h4 mt-3">Price Range</label>
                    <input type="range" className="form-range" id="price"></input>
                    <div className="my-3 text-center">
                        <Link to="/" className="btn btn-primary d-inline-block">Submit</Link>
                    </div>
                </div>
                <div className="col-sm-8 ms-1 bg-info d-flex flex-wrap rounded-3 mt-5">
                        {products.map((product)=>{
                            return <MyCart title={product.title} id={product.id} price={product.price} image={product.image} city={product.city} />
                        })}
                    <div className="col-12 mb-3 text-center">
                        <Link to="/allproduct" className="h4 text-decoration-none text-black">Load More</Link>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default ProductLanding;