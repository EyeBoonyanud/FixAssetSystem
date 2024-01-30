import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";


function Login() {
  // const api = process.env.SERVER;
  // console.log(api,"API :")
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };

  let Name = ""; //สร้างตัวแปรที่รับค่ากลับมา
  let Lastname = ""; //สร้างตัวแปรที่รับค่ากลับมา
  let Role = ""; //สร้างตัวแปรที่รับค่ากลับมา
  let UserLogin = "";
  let Emp = "";
  let NameRole ="";

  const handleLogin = async () => {
    sessionStorage.setItem("isLoggedIn", "true");
    const usernameElement = document.getElementById("Username");
    const passwordElement = document.getElementById("Password");

    if (usernameElement && passwordElement) {
      const user = usernameElement.value;
      const password = passwordElement.value;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}:5000/login?username=${user}&password=${password}`
        );

        if (response.ok) {
          const data = await response.json();
          Name = data[0][1];
          Lastname = data[0][2];
          Role = data[0][0];
          UserLogin = data[0][3];
          Emp = data[0][4];
          NameRole =data[0][5];
          console.log("Login successful", data);

          if (data && data.length > 0) {
            localStorage.setItem("Name", Name);
            localStorage.setItem("Lastname", Lastname);
            localStorage.setItem("Role", Role);
            localStorage.setItem("UserLogin", UserLogin);
            localStorage.setItem("EmpID", Emp);
            localStorage.setItem("NameRole", NameRole);
            window.location.href = "/Homepage";
          } else {
            console.error("Login failed");
            alert("Invalid username or password");
          }
        } else {
          console.error("Login failed");
          alert("Invalid username or password");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      console.error("Username or password element not found");
    }
  };

  return (
    <div className="ALL">
      <div className="BB">
        <div className="formLogin">
          <div className="row">
            <div className="col-6">
              <div className="SS"></div>
            </div>
            <div className="col-6">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    id="Username"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    id="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      fontSize: "20px",
                      width: "100px",
                      height: "50px",
                    }}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
