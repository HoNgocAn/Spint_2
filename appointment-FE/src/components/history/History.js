import "../Home.css";
import Header from "../Header";
import Footer from "../Footer";

function History(){

    return (
        <>
            <Header/>
            <div className="container mt-3">
                <h2>Lịch sử lịch hẹn</h2>

                <table className="table">
                    <thead className="table-success">
                    <tr>
                        <th>STT</th>
                        <th>Bác sĩ</th>
                        <th>Khách hàng</th>
                        <th>Thời gian</th>
                        <th>Trạng thái</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Văn Liệu</td>
                        <td>Lê Văn An</td>
                        <td>8:00 - 8:30, Thứ 2 19/02</td>
                        <td>Chờ xác nhận</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nguyễn Văn Doanh</td>
                        <td>Trần Thị Bình</td>
                        <td>8:30 - 9:00, Thứ 3 20/02</td>
                        <td>Đã hủy</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lê Hồng Anh</td>
                        <td>Nguyễn Văn Hưởng</td>
                        <td>13:30 - 14:00, Thứ 4 21/02</td>
                        <td>Đã xác nhân</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Trần Văn Bé</td>
                        <td>Lê Văn Hùng</td>
                        <td>8:00 - 8:30, Thứ 5 22/02</td>
                        <td>Chờ xác nhận</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nguyễn Văn Quýnh</td>
                        <td>Nguyễn Thị Thùy Trang</td>
                        <td>15:00 - 15:30, Thứ 6 23/02</td>
                        <td>Đã xác nhân</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Đoàn Thị Lan</td>
                        <td>Hồ Văn Tiến</td>
                        <td>16:00 - 16:30, Thứ 7 24/02</td>
                        <td>Chờ xác nhận</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <Footer/>
        </>
    )
}

export default History;