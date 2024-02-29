import img from "../img/img.png";
import "./Home.css";
import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="container-fluid header">
            <div className="row row-header">
                <div className="col-12 col-lg-1">

                </div>
                <div className="col-12 col-lg-2">
                    <img src={img} width="200" height="40"/>
                </div>
                <div className="col-12 col-lg-1">
                    <Link to="/" style={{textDecoration: 'none' }}>
                        <p className="text-header" style={{color:"black",  textDecoration: 'none' }}>Trang chủ</p>
                    </Link>
                </div>
                <div className="col-12 col-lg-1">
                    <p className="text-header">Tại nhà</p>
                </div>
                <div className="col-12 col-lg-1">
                    <p className="text-header">Tại viện</p>
                </div>
                <div className="col-12 col-lg-1">
                    <p className="text-header">Sống khỏe</p>
                </div>
                <div className="col-12 col-lg-2">
                    <div className="col-auto input-header" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <div className="dropdown">
                            <a className="find btn btn-white dropdown-toggle" href="#" role="button"
                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Tìm kiếm
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" to="/search-specialty">Tìm kiếm  chuyên khoa</Link></li>
                                <li><Link className="dropdown-item" to="/search-doctor">Tìm kiếm bác sĩ</Link></li>
                                <li><Link className="dropdown-item" href="#">Tìm kiếm lịch hẹn</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-alarm" viewBox="0 0 16 16" style={{marginLeft: "90px", marginTop:"10px"}}>
                        <path
                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
                        <path
                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
                    </svg>
                </div>
                <div className="col-12 col-lg-1">
                    <Link

                        to="/login"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             className="bi bi-person-heart" viewBox="0 0 16 16" style={{marginLeft: "30px",marginTop:"10px"}}>
                            <path
                                d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
                        </svg>
                    </Link>

                </div>
                <div className="col-12 col-lg-1">

                </div>
            </div>
        </div>

    )
}

export default Header;