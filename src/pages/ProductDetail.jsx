import { products } from "../data/products";
import { Link } from "react-router-dom";
import "../assets/css/MyCartDetail.scss";
// import state from "sweetalert/typings/modules/state";
import React from "react";
import CardRelated from "../components/CardRelated";
import { useParams } from "react-router";


class ProductDetail extends React.Component {
    state = {
        title: 'Home',
        quantity : 0,
        productDetail: {}
    }
    componentDidMount = () =>{
        document.title = this.state.title
        console.log(this.props.productId)
        

        products.forEach(product => {
            if(product.id === this.props.productId){
                this.setState({
                    productDetail: product
                })
            }
        });
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
    handleCartToStorage = () => {
        let users = JSON.parse(localStorage.getItem('users'))
        console.log(users)
        let userLogin = localStorage.getItem('userEmail')
        console.log(userLogin)
        //
        let userWithOutUserLogin = users.filter((user)=>{
            return user.email !== userLogin
        })
        console.log(userWithOutUserLogin)

        users.forEach(user => {
            //ambil email yang Login
            if(user.email === userLogin){
                
                let newCart = user.cart
                //me-replace cart yang sudah ada
                newCart.push([this.props.productId, 0])

                console.log(newCart)
                userWithOutUserLogin.push(user);
                localStorage.setItem('users', JSON.stringify(userWithOutUserLogin))
            }
        })
    }

    render(){

        const {productDetail} = this.state;
        const relatedProducts = products.filter((product) => {
            return parseInt(product.id) <= 5
        })

        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-10 mt-5">
                        <div className="card bg-info">
                            <div className="row g-0">   
                                <div className="col-sm-4 p-2">
                                    <div className="overlay" id="gambar-1">
                                        <img src={productDetail.image} className="w-100 img-thumbnail" alt="imgFull" id="staticBackdropLabel"/>
                                    </div>
                                    <div className="d-inline-block text-center mt-2 me-2" style={{cursor:"pointer"}}>
                                        <Link  to="#gambar-1" data-bs-target="#staticBackdrop"><img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/></Link>
                                        <img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/>
                                        <img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body">
                                        <h5 className="card-title fs-6 fw-bolder">{productDetail.title}</h5>
                                        <h4 className="card-text text-black-50 text-capitalize ">Rp. {productDetail.price}</h4>
                                        <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Kondisi : </span>{productDetail.condition}</span>
                                        <br />
                                        <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Berat : </span>{productDetail.heavy}</span>
                                        <br />
                                        <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Kategori : </span>{productDetail.ctg}</span>
                                        <br />
                                        <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Etalase : </span>{productDetail.storefront}</span>
                                        <p className="fw-bold fs-6 text-capitalize">Deskripsi : <span className="fw-normal fs-6">{productDetail.desc}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 bg-info text-center h-auto rounded-3 p-3 mt-5">
                        {/* <div className="input-group">
                            <button   type="submit" className="btn btn-danger p-3" onClick={(e)=>{this.handlePlus(e); e.preventDefault()}}>+</button>
                            <input type="number" aria-label="First name" className="form-control w-50 text-center" value={this.state.quantity}/>
                            <button className="btn btn-danger p-3"  onClick={(e)=>{this.handleMinus(e); e.preventDefault()}}>-</button>
                        </div> */}
                        <h4 className="text-sm-center fs-3 fw-normal">Subtotal</h4>
                        <h6 className="text-sm-center fs-3 fw-bold">Rp. {productDetail.price}</h6>
                        <br />

                        <button className="btn btn-danger w-75" onClick={this.handleCartToStorage}>Add To Card</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-12">
                        <h2 className="fw-bold text-sm-start mt-3 mb-3">Related Products</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 d-flex flex-wrap justify-content-sm-between">
                
                    {relatedProducts.map((product )=>{
                        return(
                            <CardRelated product={product} />
                        )
                    })}
                </div>
            </div>
        </div>

        )
    }
}

const ProductDetailParams = () => {
    const params = useParams();
    const idProduct = params.id;
    return(
        <ProductDetail productId={idProduct} />
    )
}

export default ProductDetailParams;
 //class ProductDetail extends React.Component{
    // state = {
    //     title: 'Home',
    //     quantity : 0
    // }
    // componentDidMount = () =>{
    //     document.title = this.state.title
    // }
    // handleMinus = () => {
    //     if(this.state.quantity > 0){
    //         this.setState({
    //             quantity : this.state.quantity - 1
    //         })
    //     }
    // }
    // handlePlus= () => {
    //     const stock = 20;
    //     if(this.state.quantity < stock){
    //         this.setState({
    //             quantity : this.state.quantity + 1
    //         })
    //     }
    // }
//     ProductDetail = () => {
        // const params = useParams();
        // const idProduct = params.id;
        // let productDetail = null;
        // products.forEach(product => {
        //     if(product.id === idProduct){
        //         productDetail = product;
        //     }
        // });
//     // } ProductDetail(){
//     //     const params = useParams();
//     //     const idProduct = params.id;
//     //     let productDetail = null;
//     //     products.forEach(product => {
//     //         if(product.id === idProduct){
//     //             productDetail = product;
//     //         }
//     //     });
//     // }
//     render(){
//         return(
//         <div className="container mt-5">
//             <div className="row mt-4">
//                 <div className="col-sm-10">
//                     <div className="card bg-info mt-5">
//                         <div className="row g-0">   
//                             <div className="col-md-4 p-2">
//                                 <div className="overlay" id="gambar-1">
//                                     <img src={productDetail.image} className="w-100 img-thumbnail" alt="imgFull" id="staticBackdropLabel"/>
//                                 </div>
//                                 <div className="d-inline-block text-center mt-2 me-2" style={{cursor:"pointer"}}>
//                                     <Link  to="#gambar-1" data-bs-target="#staticBackdrop"><img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/></Link>
//                                     <img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/>
//                                     <img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/>
//                                 </div>
//                             </div>
//                             <div className="col-sm-8">
//                                 <div className="card-body">
//                                     <h5 className="card-title fs-6 fw-bolder">{productDetail.title}</h5>
//                                     <h4 className="card-text text-black-50 text-capitalize ">Rp. {productDetail.price}</h4>
//                                     <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Kondisi : </span>{productDetail.condition}</span>
//                                     <br />
//                                     <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Berat : </span>{productDetail.heavy}</span>
//                                     <br />
//                                     <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Kategori : </span>{productDetail.ctg}</span>
//                                     <br />
//                                     <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Etalase : </span>{productDetail.storefront}</span>
//                                     <p className="fw-bold fs-6 text-capitalize">Deskripsi : <span className="fw-normal fs-6">{productDetail.desc}</span></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-2 bg-info text-center h-auto rounded-3 p-3 mt-5">
//                     <div className="input-group">
//                         <button   type="submit" className="btn btn-danger p-3" onClick={(e)=>{this.handlePlus(e); e.preventDefault()}}>+</button>
//                         <input type="number" aria-label="First name" className="form-control w-50 text-center" value={this.state.quantity}/>
//                         <button className="btn btn-danger p-3"  onClick={(e)=>{this.handleMinus(e); e.preventDefault()}}>-</button>
//                     </div>
//                     <h4 className="text-sm-center fs-3 fw-normal">Subtotal</h4>
//                     <h6 className="text-sm-center fs-3 fw-bold">Rp. {productDetail.price}</h6>
//                     <br />
//                     <Link to="/cart" className="btn btn-danger w-75">Add To Card</Link>
//                 </div>
//             </div>
//             <div className="row mt-3">
//                 <div className="col-sm-12">
//                     <h2 className="fw-bold text-sm-start mt-3 mb-3">Related Products</h2>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-sm-12 d-flex flex-wrap justify-content-sm-between">
                
//                 {products.map((product)=>{
//                     return(
//                     <div className="card-promo">
//                         <img src={product.image} alt="Product"/>
//                             <h5 className="card-promo__title">{product.title}</h5>
//                             <p className="card-promo__price">Rp. {product.price}</p>
//                             <div className="card-promo__box">
//                                 <span className="card-promo__discount">30%</span>
//                                 <span className="card-promo__price subs">Rp. {product.disc}</span>
//                             </div>
//                             <p className="card-promo__address">{product.city}</p>
//                             <br />
//                             <div className="d-inline-block ms-2">
//                                 <i className="bi bi-star me-1"></i>
//                                 <i className="bi bi-star me-1"></i>
//                                 <i className="bi bi-star-fill me-1"></i>
//                                 <i className="bi bi-star-fill me-1"></i>
//                                 <i className="bi bi-star-half me-1"></i>
//                             </div>
//                     </div>
//                     )
//                             // return <MyCart title={product.title} id={product.id} price={product.price} image={product.image} city={product.city}/>
//                 })}
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }
// export default ProductDetail

// const ProductDetail = () => {
//     const params = useParams();
//     const idProduct = params.id;
//     let productDetail = null;
//     products.forEach(product => {
//         if(product.id === idProduct){
//             productDetail = product;
//         }
//     });
//     state ={
//         title: 'Home',
//         quantity : 0
//     }
//     componentDidMount(){
//         document.title = this.state.title
//     }
//     handleMinus(){
//         if(this.state.quantity > 0){
//             this.setState({
//                 quantity : this.state.quantity - 1
//             })
//         }
//     }
//     handlePlus(){
//         const stock = 20;
//         if(this.state.quantity < stock){
//             this.setState({
//                 quantity : this.state.quantity + 1
//             })
//         }
//     }
//     return(
        // <div className="container mt-5">
        //     <div className="row mt-4">
        //         <div className="col-sm-10">
        //             <div className="card bg-info mt-5">
        //                 <div className="row g-0">   
        //                     <div className="col-md-4 p-2">
        //                         <div className="overlay" id="gambar-1">
        //                             <img src={productDetail.image} className="w-100 img-thumbnail" alt="imgFull" id="staticBackdropLabel"/>
        //                         </div>
        //                         <div className="d-inline-block text-center mt-2 me-2" style={{cursor:"pointer"}}>
        //                             <Link  to="#gambar-1" data-bs-target="#staticBackdrop"><img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/></Link>
        //                             <img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/>
        //                             <img src={productDetail.image} alt="imgThumb" className="w-25 rounded-3 me-2"/>
        //                         </div>
        //                     </div>
        //                     <div className="col-sm-8">
        //                         <div className="card-body">
        //                             <h5 className="card-title fs-6 fw-bolder">{productDetail.title}</h5>
        //                             <h4 className="card-text text-black-50 text-capitalize ">Rp. {productDetail.price}</h4>
        //                             <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Kondisi : </span>{productDetail.condition}</span>
        //                             <br />
        //                             <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Berat : </span>{productDetail.heavy}</span>
        //                             <br />
        //                             <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Kategori : </span>{productDetail.ctg}</span>
        //                             <br />
        //                             <span className="fw-normal fs-6 text-capitalize"><span className="fw-bold text-capitalize">Etalase : </span>{productDetail.storefront}</span>
        //                             <p className="fw-bold fs-6 text-capitalize">Deskripsi : <span className="fw-normal fs-6">{productDetail.desc}</span></p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-sm-2 bg-info text-center h-auto rounded-3 p-3 mt-5">
        //             <div className="input-group">
        //                 <button   type="submit" className="btn btn-danger p-3" onClick={(e)=>{this.handlePlus(e); e.preventDefault()}}>+</button>
        //                 <input type="number" aria-label="First name" className="form-control w-50 text-center" value={this.state.quantity}/>
        //                 <button className="btn btn-danger p-3"  onClick={(e)=>{this.handleMinus(e); e.preventDefault()}}>-</button>
        //             </div>
        //             <h4 className="text-sm-center fs-3 fw-normal">Subtotal</h4>
        //             <h6 className="text-sm-center fs-3 fw-bold">Rp. {productDetail.price}</h6>
        //             <br />
        //             <Link to="/cart" className="btn btn-danger w-75">Add To Card</Link>
        //         </div>
        //     </div>
        //     <div className="row mt-3">
        //         <div className="col-sm-12">
        //             <h2 className="fw-bold text-sm-start mt-3 mb-3">Related Products</h2>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-sm-12 d-flex flex-wrap justify-content-sm-between">
                
        //         {products.map((product)=>{
        //             return(
        //             <div className="card-promo">
        //                 <img src={product.image} alt="Product"/>
        //                     <h5 className="card-promo__title">{product.title}</h5>
        //                     <p className="card-promo__price">Rp. {product.price}</p>
        //                     <div className="card-promo__box">
        //                         <span className="card-promo__discount">30%</span>
        //                         <span className="card-promo__price subs">Rp. {product.disc}</span>
        //                     </div>
        //                     <p className="card-promo__address">{product.city}</p>
        //                     <br />
        //                     <div className="d-inline-block ms-2">
        //                         <i className="bi bi-star me-1"></i>
        //                         <i className="bi bi-star me-1"></i>
        //                         <i className="bi bi-star-fill me-1"></i>
        //                         <i className="bi bi-star-fill me-1"></i>
        //                         <i className="bi bi-star-half me-1"></i>
        //                     </div>
        //             </div>
        //             )
        //                     // return <MyCart title={product.title} id={product.id} price={product.price} image={product.image} city={product.city}/>
        //         })}
        //         </div>
        //     </div>
        // </div>
//     )
// }
// export default ProductDetail;