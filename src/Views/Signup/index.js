import React, { userEffect, useState } from "react";
import { Input, Space, Row, Col, Button, DatePicker, Select, Tag } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
const { Option } = Select;

function Signup() {

const [error, setError] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [passwordHint, setPasswordHint] = useState(false);
const [dob, setDob] = useState('');
const [role, setRole] = useState('');

    const history = useHistory();
    const routeChange = (url) => {
      history.push(url);
    };

    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
    const validatePassword = (password) => {
      const re = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
      return re.test(String(password).toLowerCase());
  }

     const onEmailChange = (email) => {
      setError('');
      if(!validateEmail(email)){
        setError('Please enter valid email ID'); 
      } 
      setEmail(email) 
    }

     const onPasswordChange = (password) => {
      setError('');
      console.log("validatePassword",validatePassword(password));
      if(!validatePassword(password)){
        setError('Password entry does not meet criteria'); 
      } 
      setPassword(password) 
    }

    const onDateChange = (date, dateString) => {
      setDob(dateString);
      console.log(date, dateString);
    }

    const onRoleChange = (value) => { 
      setRole(value) 
    }


    const RegisterFn = () =>{
      console.log(name, email, password, dob,role);
      if(name&& email&& password&& dob&&role){
        console.log("success registeration-->>",name, email, password, dob,role); 
      }
      // if(!_.isEmpty(username)&& !_.isEmpty(password)){
      //     let isAuthCheck = false; 
      //     if(!isAuthCheck){
      //         setError('Username or Password doesn’t match '); 
      //     }
      // }
      // else{
      //     setError('Please enter valid Username and Password');
      // }
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
                              onChange={(e)=>setName(e.target.value)}
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
                            onFocus={()=>setPasswordHint(true)}
                            // onBlur={()=>setPasswordHint(false)}
                            onChange={(e)=>onPasswordChange(e.target.value)}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            {passwordHint &&   <div className={'mt-2 w-full'}>
                              <Tag color="orange" className={'w-full'} style={{ whiteSpace: 'pre-wrap'}}>Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters</Tag>
                              </div>}
                            <div className={'w-full mt-4'}><DatePicker format={'DD/MM/YYYY'} onChange={onDateChange} size="large" placeholder="Date of Birth" className={'mt-4 w-full'} /></div>
                            <div className={'mt-4 w-full'}>
                            <Select placeholder={'Role'} size="large" className={'w-full mt-4'}  onChange={onRoleChange}>
                              <Option value="student">Student</Option>
                              <Option value="faculty">Faculty</Option> 
                            </Select> 
                            </div>
                            {error && <h5 className={'mt-2 text-sm text-red-400'}>{error}</h5>}
                            <Button size="large"
                            type="primary"
                            className={'mt-4'}
                            onClick={RegisterFn}
                            >Register</Button>  
                            <h4 className={'mt-6'}>Already have an account? <a  onClick={() => routeChange('/login')}> Login</a></h4>
                    </div>

            </Col>
        </Row>
    </div>
  );
}

export default Signup;
