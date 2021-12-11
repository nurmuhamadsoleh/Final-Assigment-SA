import { Link } from "react-router-dom";
// import { Tooltip} from 'react-bootstrap';
import { useNavigate } from "react-router";
import image from "../assets/image/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { faCartPlus, faUserAlt, faBell } from '@fortawesome/fontawesome-free-solid'
import swal from "sweetalert";

// import { Inbox } from 'react-bootstrap-icons';


const Navbar = () => {
    const userLogin = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    const renderAuthentication = () =>{
        if(userLogin){
            return (
                <div className="d-flex justify-content-end flex ms-auto">
                    <form className="d-flex justify-content-sm-center mx-auto">
                        <input className="form-control rounded-pill" type="search" placeholder="Search" aria-label="Search" size="50"/>
                        <span id="iconeye" class="icon" style={{position:"relative", zIndex:"1", left:"-50px", top:"4px", cursor:"pointer"}}>
                            <FontAwesomeIcon icon={faSearch} style={{fontSize: "32px"}}/>
                        </span>
                    </form>
                    <div className="icon">
                        <h3>
                            <FontAwesomeIcon icon={faBell} data-toggle="tooltip" title="Notifikasi" className="me-2"/>
                            <FontAwesomeIcon icon={faCartPlus}/>
                            <span style={{
                                padding: '6px 10px',
                                lineHeight: '6px',
                                background: 'red',
                                marginLeft: '2px',
                                color: 'white',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                marginRight: '8px',
                                borderRadius: '20px'
                            }}>2</span>
                            <FontAwesomeIcon icon={faUserAlt} data-toggle="tooltip" title="Profile"/><span className="fs-6 fw-normal ms-2 me-5">Hii, {userName}</span>
                        </h3>
                    </div>

                    <Link  className="nav-link text-light" to="/allproduct">Product</Link>
                    <Link onClick={authLogout} className="nav-link text-light" to="/login">Logout</Link>
                </div>
            )
        }else{
            return (
                <div className="d-flex me-2 ms-auto">
                    <Link  className="nav-link text-light" to="/login">Login</Link>
                    <Link  className="nav-link text-light" to="/register">Register</Link>
                </div>
            )
        }
    }
    const authLogout = ()=>{
        localStorage.removeItem('userEmail'); //menghapus userEmail yang sebelumnya digunakan ketika melakukan login
        localStorage.removeItem('userName'); //Menghapus userName yang sebelumnya digunakan ketika melakukan Login
        swal('Yee', 'Berhasil Logout', 'success')
        this.props.navigate('/');//kembali ke halaman home
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link className="navbar-brand me-5" to="/"><img src={image} alt="MMP" width="60px" style={{backgroundColor:"white", borderRadius:"30px"}}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar ms-auto">
                        {/* <Link  className="nav-link text-light" to="/allproduct">Product</Link> */}
                    {
                    renderAuthentication()
                    }
                    </div>
                </div>
            </div>
        </nav>
    )
}
function LogoutNavigate(){
    let navigate = useNavigate();
    return <Navbar navigate={navigate}/>
}
export default LogoutNavigate;