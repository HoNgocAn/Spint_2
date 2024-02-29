import {Link} from "react-router-dom";


function HeaderAdmin(){
    return (
        <div className="container-fluid">
            <nav>
                <div className="px-3 py--1 bg-success text-white">
                    <div className="align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <div className="btn-group">
                                <button className="btn btn-success dropdown-toggle" type="button" id="defaultDropdown"
                                        data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    DANH SÁCH
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>

                            <li>
                                <Link>
                                    TRANG CHỦ
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi d-block mx-auto mb-1" width="5" height="7">
                                        <use xlinkHref="#speedometer2"></use>
                                    </svg>
                                    CHỨNG CHỈ CHẤT LƯỢNG
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi d-block mx-auto mb-1" width="5" height="7">
                                        <use xlinkHref="#speedometer2"></use>
                                    </svg>
                                    HOẠT ĐỘNG CÔNG TY
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi d-block mx-auto mb-1" width="5" height="7">
                                        <use xlinkHref="#speedometer2"></use>
                                    </svg>
                                    ĐỐI TÁC
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">
                                    <svg className="bi d-block mx-auto mb-1" width="5" height="7">
                                        <use xlinkHref="#speedometer2"></use>
                                    </svg>
                                    LIÊN HỆ
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default HeaderAdmin