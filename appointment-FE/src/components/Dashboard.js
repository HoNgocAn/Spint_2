import HomePage from "./home/HomePage";
import HomeAdmin from "./home/HomeAdmin";
import HomeDoctor from "./home/HomeDoctor";
import authToken from "../service/units/UserToken";
import HomeCustomer from "./home/HomeCustomer";


function Dashboard() {

    let role;

    if (!authToken()){
        console.log("Error")
    }else {
        role = authToken().roles[0].authority;
    }



    const renderDashboardContent = () => {
        if (!role) {
            return <HomePage/>;
        } else if (role.includes("ADMIN")) {
            return <HomeAdmin/>;
        } else if (role.includes("DOCTOR")) {
            return <HomeDoctor/>;
        } else if (role.includes("CUSTOMER")) {
            return <HomeCustomer/>;
        }
    };

    return <>
        <div>
            {renderDashboardContent()}
        </div>
    </>;
}

export default Dashboard;