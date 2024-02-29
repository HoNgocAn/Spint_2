import img_19 from "../../img/img_19.png";
import "./Appointment.css"
import Header from "../Header";
import Footer from "../Footer";
import React from "react";

function Appointment(){


    return (
        <>
            <Header/>
            <form style={{width:"750px"}} >
                <div className="row row-doctor">
                    <div className="col-12 col-lg-3">
                        <div className="card" style={{width:"150px", height:"200px"}}>
                            <img className="card-img" src={img_19} alt="Card image" height="150" width="80"/>
                                <div className="card-body">
                                </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <h4>Bác sĩ Nguyễn Văn liệu</h4>
                        <p>Phó Trưởng khoa Thần kinh, Bệnh viện Bạch Mai
                            Phó Chủ nhiệm Bộ môn Thần kinh, Đại học Y khoa Hà Nội</p>
                        <p style={{fontSize:"25px"}}> Lịch hẹn: 9:00 - 9h30, Thứ 6-2/2 </p>
                    </div>
                </div>
                <div className="radio-appointment">
                    <div>
                        <input
                            type="radio"
                            name ="option"
                            value="option1"
                            checked='option1'
                            // onChange={handleRadioChange}
                        /><span>&nbsp;</span>
                         Đặt cho mình
                    </div>
                    <br />
                    <div>
                        <input
                            type="radio"
                            name ="option"
                            value="option2"
                            checked='option2'
                            // onChange={handleRadioChange}
                        /><span>&nbsp;</span>
                         Đặt cho người thân
                    </div>
                </div>
                <div className="form-group input-appointment">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <input type="text" className="form-control find" placeholder="Họ và tên bệnh nhân"/>
                </div>
                <div className="form-group input-appointment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    <input type="text" className="form-control find"  placeholder="Số điện thoại"/>
                </div>
                <div className="form-group input-appointment">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
                    <input type="text" className="form-control find" placeholder="Ngày, tháng, năm sinh"/>
                </div>
                <div className="form-group input-appointment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
                    <input type="text" className="form-control find" placeholder="Địa chỉ"/>
                </div>
                <div className="form-group input-appointment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    <input type="text" className="form-control find" placeholder="Lý do khám"/>
                </div>
                <div className="button-appoint">
                    <button type="button" className="btn btn-outline-warning form-group w-50">Đặt lịch hẹn</button>
                </div>
            </form>
            <Footer/>
        </>
    )
}

export default Appointment;