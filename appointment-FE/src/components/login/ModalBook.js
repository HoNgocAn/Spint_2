import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import React from "react";

function ModalBook() {
    const navigate = useNavigate();
    const logOutUser = async () => {
        navigate("/login");
    };

    return (
        <>
            <div className="modal fade" id="book" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Đăng nhập</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn phải đăng nhập mới có thể đặt lịch hẹn!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={logOutUser}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalBook;