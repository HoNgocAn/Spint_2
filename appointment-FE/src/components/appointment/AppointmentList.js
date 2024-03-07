import Header from "../Header";
import Footer from "../Footer";
import React, {useEffect, useState} from "react";
import * as method from "../../service/appointment/AppointmentService";
import ReactPaginate from "react-paginate";
import {Link, useParams} from "react-router-dom";
import "../Home.css"
import { format } from 'date-fns';


function AppointmentList(){


    const [nameSearch, setNameSearch] = useState([])

    const [appointment, setAppointment] = useState([]);


    const [totalPages, setTotalPages] = useState(0);



    useEffect(() => {
        getAll(0,nameSearch);
    }, []);

    const getAll = async (page,nameSearch) => {
        try {
            let data = await method.getAllAppointment(page,nameSearch);
            setAppointment(data.content);
            setTotalPages(data.totalPages)
        }catch (e) {
            console.log("Error");
        }
    }

    const handlePageClick = (event) => {
        getAll(event.selected, nameSearch)
    }


    return (
        <>
            <Header/>
            <div className="container mt-3 ">
                <h2>Lịch sử lịch hẹn</h2>

                <table className="table appointment-list" >
                    <thead className="table">
                    <tr>
                        <th>STT</th>
                        <th>Bác sĩ</th>
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
                        <td>
                            <Link to={`/appointment/detail/${item.id}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                            </Link>
                            <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                            </Link>
                            <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                            </Link>
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
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Sau>"
                            onPageChange={handlePageClick}
                            pageCount={totalPages}
                            previousLabel="<Trước"

                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <Footer/>
        </>

    )
}

export default AppointmentList;