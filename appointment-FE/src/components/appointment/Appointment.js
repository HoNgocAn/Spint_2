
import "./Appointment.css"
import Header from "../Header";
import Footer from "../Footer";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as method from "../../service/doctor/DoctorService";
import * as method1 from "../../service/appointment/AppointmentService";
import * as method2 from "../../service/customer/CustomerService";
import {Form, Field, Formik, ErrorMessage} from "formik";
import * as yup from "yup"
import {toast} from "react-toastify";

import 'firebase/auth';
import authToken from "../../service/units/UserToken";
import { format } from 'date-fns';


function Appointment(){

    const {id, date, time } = useParams();
    const [doctor, setDoctor] = useState({});
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({});

    const email = authToken().sub;

    useEffect(() => {
        getAll();
        getCustomerByEmail();
    }, []);


    const getAll = async () => {
        try {
            let data = await method.getDoctorById(id);
            setDoctor(data);
        }catch (e) {
            navigate("/error404")
        }
    }

    const getCustomerByEmail = async () => {
        try {
            let data = await method2.getCustomerByEmail(email);
            setCustomer(data)
        }catch (e) {
            navigate("/error404")
        }
    }

    const dd = new Date();

    const date120 = `${dd.getFullYear() - 120}-${dd.getMonth() + 1}-${dd.getDate()}`;

    const validateForm = {
        nameCustomer: yup.string().required("Vui lòng nhập tên người khám")
            .matches(/^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*$/, "Chứa kí tự đặc biệt, hoặc số.")
            .min(4, "Tên khách hàng phải dài hơn 4 kí tự")
            .max(50, "Tên khách hàng phải ngắn 50 kí tự"),
        birthday : yup.date().required("Vui lòng nhập ngày, tháng, năm sinh")
            .min(date120, "Vui lòng nhập bé hơn 120 tuổi."),
        phone: yup.string().required("Vui lòng nhập số điện thoại")
            .matches(/^(01|03|04|05|07|08|09)\d{8}$/, "Số điện thoại sai định dạng."),
        address: yup.string().required("Vui lòng nhập địa chỉ người khám"),
        reason:  yup.string().required("Vui lòng nhập lý do khám")
    }

    const createAppointment = (appointment) => {
        const isSuccess = method1.createAppointment(appointment);
        if (isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/search-appointment/customer")
        } else {
            toast.error("Thêm mới thất bại")
        }
    }


    return (
        <>
            <Header/>
            {customer.id && (
                <Formik initialValues={{
                    nameCustomer: customer.name,
                    date: format(date, 'dd/MM/yyyy'),
                    time: time,
                    phone: customer.phone,
                    birthday:  format(customer.birthday, 'dd/MM/yyyy'),
                    address: customer.address,
                    reason: "",
                    idDoctor: id,
                    idCustomer: customer.id
                }}
                    onSubmit={(values)=>{
                createAppointment(values);
            }}
                    validationSchema={yup.object(validateForm)}>
            <Form style={{width:"750px"}} className= "form-appointment" >
                <div className="row row-doctor">
                    <div className="col-12 col-lg-3">
                        <div className="card" style={{width:"150px", height:"200px"}}>
                            <img className="card-img" src={doctor.avatar} alt="Card image" height="150" width="80"/>
                                <div className="card-body">
                                </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <h4>{doctor.name}</h4>
                        <p>{doctor.degree}</p>
                        <p style={{fontSize:"25px"}}> Lịch hẹn : {time} , {format(date, 'dd/MM/yyyy')}  </p>
                    </div>
                </div>
                <div className="form-group input-appointment">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <Field type="text" name="nameCustomer" className="form-control find" id="nameCustomer"  placeholder="Họ và tên bệnh nhân"/>
                </div>
                <ErrorMessage
                    name="nameCustomer"
                    component="span"
                    className="err-name"
                ></ErrorMessage>
                <div className="form-group input-appointment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    <Field type="text" name="phone" className="form-control find" id="phone"  placeholder="Số điện thoại"/>
                </div>
                <ErrorMessage
                    name="phone"
                    component="span"
                    className="err-name"
                ></ErrorMessage>
                <div className="form-group input-appointment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"/></svg>
                    <Field type="text" name="birthday" className="form-control find" id="birthday"  placeholder="Ngày, tháng, năm sinh"/>
                </div>
                <ErrorMessage
                    name="birthday"
                    component="span"
                    className="err-name"
                ></ErrorMessage>
                <div className="form-group input-appointment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
                    <Field type="text" name="address" className="form-control find" id="address"  placeholder="Địa chỉ"/>
                </div>
                <ErrorMessage
                    name="address"
                    component="span"
                    className="err-name"
                ></ErrorMessage>
                <div className="form-group input-appointment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    <Field type="text" name="reason" className="form-control find" id="reason"  placeholder="Lý do khám"/>
                </div>
                <ErrorMessage
                    name="reason"
                    component="span"
                    className="err-name"
                ></ErrorMessage>
                <div className="button-appoint">
                    <button type="submit" className="btn btn-outline-warning form-group w-50">Đặt lịch hẹn</button>
                </div>
            </Form>
            </Formik>
            )}
            <Footer/>
        </>
    )
}

export default Appointment;