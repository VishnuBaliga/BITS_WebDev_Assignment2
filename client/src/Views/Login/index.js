import React, { userEffect, useState } from "react";

import { Input, Space, Row, Col, Button, message } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { RegisteredUsers } from '../../DataStore';
import _ from 'lodash';
import axios from 'axios';
const LoginURL = `https://vishnu-baliga-web-services.herokuapp.com/auth/login/`;

function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const routeChange = (url) => {
        history.push(url);
    };

    const LoginFn = () => {
        if (!_.isEmpty(username) && !_.isEmpty(password)) {
            let isAuthCheck = false;

            const FormData = {
                "email": username,
                "password": password
            };
            setLoading(true);
            axios.post(LoginURL, FormData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((data) => {
                setLoading(false);
                console.log("errorr-->>>",data);
                routeChange('/faculty-dashboard');
            }).catch((err) => {
                setLoading(false);
                console.log("errorr-->>>",err.data);
                setError(err.message);
            }); 
        }
        else {
            setError('Please enter valid Username and Password');
        }
    }

    return (
        <div className="App">
            <Row justify={'center'}>
                <Col span={6} className={'mt-12'}>
                    <div className="flex flex-col justify-center items-center mt-20">
                        <h1 className={'text-2xl'}>Login</h1>
                        <Input size="large" placeholder="Username"
                            className={'mt-4'} value={username} onChange={(e) => { setError(''); setUsername(e.target.value) }} />
                        <Input.Password
                            size="large"
                            placeholder="Password"
                            className={'mt-4'}
                            value={password} onChange={(e) => { setError(''); setPassword(e.target.value) }}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        {error && <h5 className={'mt-2 text-sm text-red-400'}>{error}</h5>}
                        <Button size="large"
                            type="primary"
                            loading={loading}
                            className={'mt-4'} onClick={() => LoginFn()}>Login</Button>
                        <h4 className={'mt-6'}>Don’t have an account? <a onClick={() => routeChange('/signup')}> Sign Up</a></h4>
                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default Login;
