import Header from "../Header";
import Footer from "../Footer";
import {useEffect, useState} from "react";
import * as method from "../../service/appointment/AppointmentService";
import {Link, useNavigate, useParams} from "react-router-dom";
import React from "react";
import "../Home.css"
import { format } from 'date-fns';


function DetailAppointment(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [appointment, setAppointment] = useState({});


    useEffect(() => {
        getAll(0);
    }, []);

    const getAll = async () => {
        try {
            let data = await method.getAppointmentById(id);
            setAppointment(data);
        }catch (e) {
            navigate("/error404")
        }
    }

    return (
        <>
            <Header/>
            <div className="container">
                <h3 style={{textAlign:"center"}}>Thông tin chi tiết lịch hẹn</h3>
                <table className="table table-appointment">
                    {appointment ?
                    <thead className="table appointment-details">
                    <tr>
                        <th>Tên bệnh nhân</th>
                        <td>{appointment.name_Customer}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Ngày, tháng, năm sinh</th>
                        <td>{appointment.birthday}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Địa chỉ</th>
                        <td>{appointment.address}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Số điện thoại</th>
                        <td>{appointment.phone}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Ngày khám</th>
                        <td>{appointment.date}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Khung giờ</th>
                        <td>{appointment.time}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Lý do khám</th>
                        <td>{appointment.reason}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Bác sĩ khám</th>
                        <td>{appointment.nameDoctor}</td>
                        <td></td>
                    </tr>
                    </thead>
                    : (
                        <h5 style={{color: "red"}}>Không tìm thấy dữ liệu</h5>
                    )}
                </table>
            </div>
            <Footer/>
        </>
    )
}

export default DetailAppointment;