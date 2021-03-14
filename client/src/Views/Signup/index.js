import React, { userEffect, useState } from "react";
import { Input, Space, Row, Col, Button, DatePicker, Select, Tag, message } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const { Option } = Select;
const SignupURL = `https://vishnu-baliga-web-services.herokuapp.com/auth/register/`;

function Signup() {

  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHint, setPasswordHint] = useState(false);
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);


  const history = useHistory();
  const routeChange = (url) => {
    history.push(url);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const validatePassword = (password) => {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(String(password));
  }

  const onEmailChange = (email) => {
    setError('');
    setEmail(email)
  }

  const onPasswordChange = (password) => {
    setError('');
    setPassword(password)
  }

  const onDateChange = (date, dateString) => {
    setDob(dateString);
    console.log(date, dateString);
  }

  const onRoleChange = (value) => {
    setRole(value)
  }


  const RegisterFn = () => {
    console.log(name, email, password, dob, role);



    setError('');
    if (name && email && password && dob && role) {
      let isSuccess = true;

      if (!validatePassword(password)) {
        isSuccess = false;
        setError('Password entry does not meet criteria');
      }
      if (!validateEmail(email)) {
        isSuccess = false;
        setError('Please enter valid email ID');
      }
      if (isSuccess) {
        setLoading(true);

        const FormData = {
          "name": name,
          "email": email,
          "password": password,
          "dob": dob,
          "type": role
        };



        axios.post(SignupURL, FormData, {
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(() => {
          message.success('Registeration successful! Please login to continue.');
          setTimeout(() => {
            setLoading(false);
            routeChange('/login');
          }, 2000);
        }).catch((err) => {
          setLoading(false);
          message.error(err);
        });
      }
    }
    else {
      setError('Please fill all the fields in the form');
    }
  }

  return (
    <div className="App">
      <Row justify={'center'}>
        <Col span={6} className={'mt-12'}>
          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className={'text-2xl'}>Register</h1>
            <div className={'mt-4 w-full'}>
              <Input size="large" placeholder="Name" className={'mt-4'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={'mt-4 w-full'}>
              <Input size="large" placeholder="Email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
              />
            </div>
            <Input.Password
              size="large"
              placeholder="Password"
              className={'mt-4'}
              value={password}
              onFocus={() => setPasswordHint(true)}
              // onBlur={()=>setPasswordHint(false)}
              onChange={(e) => onPasswordChange(e.target.value)}
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            {passwordHint && <div className={'mt-2 w-full'}>
              <Tag color="orange" className={'w-full'} style={{ whiteSpace: 'pre-wrap' }}>Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters</Tag>
            </div>}
            <div className={'w-full mt-4'}><DatePicker format={'YYYY-MM-DD'} onChange={onDateChange} size="large" placeholder="Date of Birth" className={'mt-4 w-full'} /></div>
            <div className={'mt-4 w-full'}>
              <Select placeholder={'Role'} size="large" className={'w-full mt-4'} onChange={onRoleChange}>
                <Option value="student">Student</Option>
                <Option value="teacher">Faculty</Option>
              </Select>
            </div>
            {error && <h5 className={'mt-2 text-sm text-red-400'}>{error}</h5>}
            <Button size="large"
              type="primary"
              className={'mt-4'}
              onClick={RegisterFn}
              loading={loading}
            >Register</Button>
            <h4 className={'mt-6'}>Already have an account? <a onClick={() => routeChange('/login')}> Login</a></h4>
          </div>

        </Col>
      </Row>
    </div>
  );
}

export default Signup;
