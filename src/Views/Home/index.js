import React from "react";
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';


function Home() {
    const history = useHistory();
    const routeChange = (url) => {
    history.push(url);
};

  return (
    <div className="App">
    <Row justify={'center'}>
        <Col span={20}>
                <div className={'flex justify-end items-center py-4 border-gray-200'} style={{borderBottomWidth:'thin'}}>
                        <Button onClick={() => routeChange('/login')}> Login</Button>
                        <Button className={'ml-4'} type={'primary'} onClick={() => routeChange('/signup')}> Sign Up</Button>
                </div> 
        </Col>
    </Row>
    <Row justify={'center'}>
        <Col span={20}>
                <div className={'flex flex-col justify-center items-center'}>
                <img src="./images/bg2.png" style={{maxWidth:'450px', margin: '50px auto 0'}}/>
                <h1 className={'text-2xl mt-10'}>Assignment 2 - Frontend development with React</h1> 
                <h1 className={'text-sm'}>By Vishnu Baliga</h1> 
                </div>
        </Col>
    </Row>
</div>
  );
}

export default Home;
