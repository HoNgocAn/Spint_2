import React, {useEffect, useState} from "react";
import * as method from "../../service/appointment/AppointmentService";
import Header from "../Header";
import {Link, useNavigate} from "react-router-dom";
import Pagination from "../Pagination";
import Footer from "../Footer";
import * as method2 from "../../service/customer/CustomerService";
import authToken from "../../service/units/UserToken";
import "../Home.css";


function SearchAppointCustomer(){


    const navigate = useNavigate();

    const [nameSearch, setNameSearch] = useState("")

    const [appointment, setAppointment] = useState([]);

    const [totalPages, setTotalPages] = useState(0);

    const [customer, setCustomer] = useState({});

    const email = authToken().sub;

    // useEffect(() => {
    //     getAll(customer.id,0,nameSearch);
    //     getCustomerByEmail()
    // }, [nameSearch]);

    console.log(email)

    useEffect(() => {
        getCustomerByEmail();
    }, []);

    useEffect(() => {
        getAll(customer.id, 0);
    }, [customer.id]);




    const getAll = async (id,page) => {
        try {
            let data = await method.getAllAppointmentByCustomer(customer.id,page);
            setAppointment(data.content);
            setTotalPages(data.totalPages)
        }catch (e) {
            console.log("error");
        }
    }
    //
    const handlePageClick = (event) => {
        getAll(event.selected, nameSearch)
    }
    //

    const getCustomerByEmail = async () => {
        try {
            let data = await method2.getCustomerByEmail(email);
            setCustomer(data)
        }catch (e) {
            navigate("/error404");
        }
    }

    return (
        <>
            <Header/>
            <div className="container">

                <h2>Tổng hợp lịch khám của bệnh nhân</h2>

                <table className="table appointment-list">
                    <thead className="table ">
                    <tr>
                        <th>STT</th>
                        <th>Người khám</th>
                        <th>Bệnh nhân</th>
                        <th>Ngày khám</th>
                        <th>Khung giờ</th>
                        <th>Lý do khám</th>
                        <th>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {appointment? (
                        appointment.map((item,index) =>
                            <tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.nameDoctor}</td>
                                <td>{item.name_Customer}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.reason}</td>
                                <td className="icon-appoint-customer">
                                    <Link to={`/appointment/detail/${item.id}`} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="20"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                    </Link>
                                    <p>Chi tiết</p>
                                </td>
                            </tr>
                        )
                    ) : (
                        <h5 style={{color: "red"}}>Không tìm thấy dữ liệu</h5>
                    )}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                {totalPages > 1 ? (
                    <div className="page">
                        <Pagination handlePageClick={handlePageClick} totalPages={totalPages} />
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <Footer/>
        </>
    )

}


export default SearchAppointCustomer;