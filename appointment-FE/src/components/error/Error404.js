import {NavLink} from "react-router-dom";


export default function Error404 (){
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"><span className="text-danger">Cảnh báo!</span></p>
                    <p className="lead">
                        Lỗi không tìm thấy tài nguyên
                    </p>
                    <NavLink to="/" className="btn btn-outline-primary rounded-0">Quay lại trang chủ</NavLink>
                </div>
            </div>
        </>
    )
}