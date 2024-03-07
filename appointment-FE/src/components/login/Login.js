
import {ErrorMessage, Field, Formik, Form} from "formik";
import * as Yup from "yup";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as authService from "../../service/auth/AuthService";
import Header from "../Header";
import Footer from "../Footer";
import {useEffect} from "react";
import "./Login.css";
import React from "react";
import login from "../../img/login.png"


export default function Login() {
    const user = JSON.parse(localStorage.getItem(`user`));
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, []);


    const initValues = {
        email: "",
        password: ""
    }
    const validateFormLogin = Yup.object({
        email: Yup.string()
            .required("Vui lòng nhập email."),
        password: Yup.string()
            .required("Vui lòng nhập mật khẩu.")
    });

    const handleSubmitFormLogin = async (values, {setFieldError}) => {
        try {
            const res = await authService.login(values);

            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate("/dashboard")
                toast.success("Đăng nhập thành công !");

            }
        } catch (e) {
            setFieldError("password", e.data);

        }
    }

    return (
        <>
            <Header/>
            <div className="container pt-lg-5 mb-5">
                <div className="d-flex justify-content-center">

                    <div className="col-8">
                        <div className="form-control shadow rounded-0 p-4">

                            <div className="row py-5 mt-2 align-items-center">

                                <div className="col-md-6 col-lg-6 ml-auto">
                                    <Formik initialValues={initValues}
                                            onSubmit={(values, {setFieldError}) => handleSubmitFormLogin(values, {setFieldError})}
                                            validationSchema={validateFormLogin}>
                                        <Form className="form-login">
                                            <h2 style={{textAlign:"center"}}>ĐĂNG NHẬP</h2>
                                            <img className="card-img" src={login} alt="Card image" height="180" width="100"/>
                                            <div className="row">
                                                <div className="input-group col-lg-6 mb-4">
                                                    <label htmlFor="email"
                                                           className="input-group-text bg-white px-4 border-md border-right-0">
                                                        <i className="fas fa-user"></i>
                                                    </label>
                                                    <Field id="email" type="text" name="email" placeholder="Email"
                                                           className="form-control bg-white border-left-0 border-md"/>
                                                </div>
                                                <ErrorMessage name="email" className="text-danger"
                                                              component="p"/>
                                                <div className="input-group col-lg-6 mb-4">
                                                    <label htmlFor="password"
                                                           className="input-group-text bg-white px-4 border-md border-right-0">
                                                        <i className="fas fa-lock"></i>
                                                    </label>
                                                    <Field id="password" type="password" name="password"
                                                           placeholder="Mật khẩu"
                                                           className="form-control bg-white border-left-0 border-md"/>
                                                </div>
                                                <ErrorMessage name="password" className="text-danger"
                                                              component="p"/>

                                                <div className="d-flex me-5 justify-content-center gap-3">
                                                    <button type="submit" className="btn btn-success btn-sm w-100">
                                                        Đăng nhập
                                                    </button>
                                                </div>
                                                <div className="d-flex me-5 justify-content-center gap-3 mt-3">
                                                    <NavLink className="btn btn-primary btn-sm w-100" to="#" >
                                                        Đăng ký
                                                    </NavLink>
                                                </div>
                                                <div className="link-login">
                                                    <Link to="#" style={{color:"black"}}>Quên mật khẩu</Link>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )

}