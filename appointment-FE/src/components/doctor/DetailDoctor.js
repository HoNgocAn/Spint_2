
import Header from "../Header";
import Footer from "../Footer";
import "../Home.css";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as method from "../../service/doctor/DoctorService";

function DetailDoctor(){

    const {id} = useParams();
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        getAll()
    }, []);

    const getAll = async () => {
        try {
            let data = await method.getDoctorById(id);
            setDoctor(data);
        }catch (e) {
            console.log("Error");
        }
    }

    return (
        <>
            <Header/>
            {doctor ?
                <div className="container" key={doctor.id}>
                <div className="row row-doctor-detail">
                    <div className="col-12 col-lg-2">
                        <div className="card" style={{width:"200px", height: "300px"}}>
                            <img className="card-img" src={doctor.avatar} alt="Card image" height="230" width="100"/>
                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10">

                        <table className="table">
                            <thead>
                            <h4>{doctor.name}</h4>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-doctor">Chuyên môn</td>
                                <td>{doctor.degree}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-doctor">Ngày, tháng, năm sinh</td>
                                <td>{doctor.birthday}</td>
                            </tr>
                            <tr>
                                <td className="text-doctor">Số điện thoại</td>
                                <td>{doctor.phone}</td>
                            </tr>
                            <tr>
                                <td className="text-doctor">Email</td>
                                <td>{doctor.email}</td>
                            </tr>
                            <tr>
                                <td className="text-doctor">Đia chỉ</td>
                                <td>{doctor.address}</td>
                            </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="row row-doctor">
                    <div className="col-12 col-lg-6 time-doctor-left">
                        <select className="form-select w-25" aria-label="Default select example">
                            <option selected>Thứ 6- 2/2</option>
                            <option value="1">Thứ 7- 3/2</option>
                            <option value="2">CN - 4/2</option>
                            <option value="3">Thứ 2- 5/2</option>
                            <option value="3">Thứ 3- 6/2</option>
                            <option value="3">Thứ 4- 7/2</option>
                            <option value="3">Thứ 5- 8/2</option>
                        </select>
                        <div style={{marginTop: "15px", marginLeft: "3px"}}>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path
                                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                    <path
                                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>
                                <span>&nbsp;</span><span>&nbsp;</span>
                                LỊCH KHÁM
                            </p>
                            <div className="row">

                                <div className="col-12 col-lg-2 time-appointment ">
                                    <Link to="/appointment" className="link-doctor">
                                        08:00 - 08:30
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment ">
                                    <Link to="/appointment" className="link-doctor">
                                        08:30 - 09:00
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment">
                                    <Link to="/appointment" className="link-doctor">
                                        09:00 - 09:30
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment">
                                    <Link to="/appointment" className="link-doctor">
                                        09:30 - 10:00
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment">
                                    <Link to="/appointment" className="link-doctor">
                                        10:30 - 11:00
                                    </Link>
                                </div>

                                <div className="col-12 col-lg-2 time-appointment">
                                    <Link to="/appointment" className="link-doctor">
                                        13:30 - 14:00
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment ">
                                    <Link to="/appointment" className="link-doctor">
                                        14:00 - 14:30
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment">
                                    <Link to="/appointment" className="link-doctor">
                                        14:30 - 15:00
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment">
                                    <Link to="/appointment" className="link-doctor">
                                        15:00 - 15:30
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-2 time-appointment">
                                    <Link to="/appointment" className="link-doctor">
                                        15:30 - 16:00
                                    </Link>
                                </div>

                            </div>
                            <p style={{fontSize:"20px", marginTop:"20px", marginLeft:"140px"}}>Chọn <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                                         className="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                <path
                                    d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                            </svg>
                                <span>&nbsp;</span>và đặt lịch hẹn</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 time-doctor-right">
                        <h6>ĐỊA CHỈ KHÁM</h6>
                        <p>Phòng khám số 1 - Bệnh viện Bạch Mai, Hà Nội</p>
                        <p>GIÁ KHÁM: 200.000 vnđ</p>
                        <p>LOẠI BẢO HIỂM ÁP DỤNG</p>
                    </div>
                </div>

            </div>
             : (
            <h5 style={{color: "red"}}>Không tìm thấy dữ liệu</h5>
            )}
            <Footer/>
        </>
    )
}

export default DetailDoctor;