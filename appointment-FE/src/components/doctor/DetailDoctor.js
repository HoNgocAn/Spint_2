
import Header from "../Header";
import Footer from "../Footer";
import "../Home.css";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as method from "../../service/doctor/DoctorService";
import * as method1 from "../../service/dateExam/DateExamService";
import { addDays,  format } from 'date-fns';
import ModalBook from "../login/ModalBook";
import authToken from "../../service/units/UserToken";
import * as method2 from "../../service/appointment/AppointmentService";


function DetailDoctor(){


    const {id} = useParams();

    const navigate = useNavigate();

    const [idTime, setIdTime] = useState(1);
    const [doctor, setDoctor] = useState({});

    const [date, setDate] = useState([])

    const [dates, setDates] = useState([])

    const [dateDetail, setDateDetail] = useState({})


    useEffect(() => {
        getAll();
        getAllDate(0);
    }, [id]);

    useEffect(() => {
        if (idTime) {
            getDateById();
        }
    }, [idTime]);

    useEffect(() => {
        if (dateDetail.date) {
            getAllAppointment(id, 0, dateDetail.date);
        }
    }, [dateDetail.date]);

    const getAll = async () => {
        try {
            let data = await method.getDoctorById(id);
            setDoctor(data);
        }catch (e) {
            navigate("/error404")
        }
    }

    const getAllAppointment = async (id,page) => {
        try {
            const dates = await method2.getAllAppointmentByDoctor(id,page,  format(dateDetail.date, 'dd/MM/yyyy'))
            setDates(dates.content);
        }catch (e) {
            console.log("error")
        }
    }

    const getDateById = async () => {
        try {
            let data = await method1.getDateById(idTime);
            setDateDetail(data)
        }catch (e) {
            navigate("/error404")
        }
    }

    const getAllDate = async (page) => {
        try {
            let data = await method1.getAllDate(page);
            setDate(data.content);
        }catch (e) {
            navigate("/error404")
        }
    }

    let role;

    if (!authToken()){
        console.log("error")
    }else {
        role = authToken().roles[0].authority;
    }

    const handleSelectChange = (event) => {
        setIdTime( event.target.value);
    };


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

                    <div className="col-12 col-lg-6 time-doctor-left" >

                        <select className="form-select w-25" aria-label="Default select example"  onChange={handleSelectChange}>
                            {date?  (
                                date.map(item =>
                            <option value= {item.id} key={item.id} j> {format(item.date, 'dd/MM/yyyy')}</option>
                                )
                            ) : (
                                <h5 style={{color: "red"}}>Không tìm thấy dữ liệu</h5>
                            )}
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
                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time1 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time1}`} className="link-doctor">
                                                            {dateDetail.time1}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time1}`} className="link-doctor">
                                                {dateDetail.time1}
                                            </Link>
                                        )}
                                    </div>
                                    :
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                              data-bs-target="#book">
                                            {dateDetail.time1}
                                        </Link>
                                    </div>}

                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time2 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time2}`} className="link-doctor">
                                                            {dateDetail.time2}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time2}`} className="link-doctor">
                                                {dateDetail.time2}
                                            </Link>
                                        )}
                                    </div>
                                :
                                <div className="col-12 col-lg-2 time-appointment ">
                                    <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                          data-bs-target="#book">
                                        {dateDetail.time2}
                                    </Link>
                                </div>}

                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time3 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time3}`} className="link-doctor">
                                                            {dateDetail.time3}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time3}`} className="link-doctor">
                                                {dateDetail.time3}
                                            </Link>
                                        )}
                                    </div>
                                :
                                <div className="col-12 col-lg-2 time-appointment ">
                                    <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                          data-bs-target="#book">
                                        {dateDetail.time3}
                                    </Link>
                                </div>}

                                {role == "CUSTOMER" || role == "ADMIN" ?
                                <div className="col-12 col-lg-2 time-appointment ">
                                    {dates && dates.length > 0 ? (
                                        dates.map(item => (
                                            <div key={item.id}>
                                                {item.time !== dateDetail.time4 ?
                                                    <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time4}`} className="link-doctor">
                                                        {dateDetail.time4}
                                                    </Link>
                                                    : <div>Đã đặt</div>}
                                            </div>
                                        ))
                                    ) : (
                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time4}`} className="link-doctor">
                                            {dateDetail.time4}
                                        </Link>
                                    )}
                                </div>
                                :
                                <div className="col-12 col-lg-2 time-appointment ">
                                    <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                          data-bs-target="#book">
                                        {dateDetail.time4}
                                    </Link>
                                </div>}

                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time5 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time5}`} className="link-doctor">
                                                            {dateDetail.time5}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time5}`} className="link-doctor">
                                                {dateDetail.time5}
                                            </Link>
                                        )}
                                    </div>
                                :
                                <div className="col-12 col-lg-2 time-appointment ">
                                    <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                          data-bs-target="#book">
                                        {dateDetail.time5}
                                    </Link>
                                </div>}


                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time6 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time6}`} className="link-doctor">
                                                            {dateDetail.time6}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time6}`} className="link-doctor">
                                                {dateDetail.time6}
                                            </Link>
                                        )}
                                    </div>
                                    :
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                              data-bs-target="#book">
                                            {dateDetail.time6}
                                        </Link>
                                    </div>}

                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time7 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time7}`} className="link-doctor">
                                                            {dateDetail.time7}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time7}`} className="link-doctor">
                                                {dateDetail.time7}
                                            </Link>
                                        )}
                                    </div>
                                    :
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                              data-bs-target="#book">
                                            {dateDetail.time7}
                                        </Link>
                                    </div>}


                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time8 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time8}`} className="link-doctor">
                                                            {dateDetail.time8}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time8}`} className="link-doctor">
                                                {dateDetail.time8}
                                            </Link>
                                        )}
                                    </div>
                                    :
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                              data-bs-target="#book">
                                            {dateDetail.time8}
                                        </Link>
                                    </div>}


                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time9 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time9}`} className="link-doctor">
                                                            {dateDetail.time9}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time9}`} className="link-doctor">
                                                {dateDetail.time9}
                                            </Link>
                                        )}
                                    </div>
                                    :
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                              data-bs-target="#book">
                                            {dateDetail.time9}
                                        </Link>
                                    </div>}

                                {role == "CUSTOMER" || role == "ADMIN" ?
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        {dates && dates.length > 0 ? (
                                            dates.map(item => (
                                                <div key={item.id}>
                                                    {item.time !== dateDetail.time10 ?
                                                        <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time10}`} className="link-doctor">
                                                            {dateDetail.time10}
                                                        </Link>
                                                        : <div>Đã đặt</div>}
                                                </div>
                                            ))
                                        ) : (
                                            <Link to={`/appointment/${id}/${dateDetail.date}/${dateDetail.time10}`} className="link-doctor">
                                                {dateDetail.time10}
                                            </Link>
                                        )}
                                    </div>
                                    :
                                    <div className="col-12 col-lg-2 time-appointment ">
                                        <Link to="#" className="link-doctor" data-bs-toggle="modal"
                                              data-bs-target="#book">
                                            {dateDetail.time10}
                                        </Link>
                                    </div>}
                                <ModalBook/>
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
                        <p>Bệnh viện Bạch Mai, Hà Nội</p>
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