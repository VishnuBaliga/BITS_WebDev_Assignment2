import React, { userEffect, useState } from "react";
import { Table, Row, Col,Drawer, Button, Form, Input, Modal, message, Select, DatePicker } from 'antd';
import {coursesAssigned} from '../../../DataStore/';
import { PlusOutlined } from '@ant-design/icons'; 
import moment from 'moment';
const { Option } = Select;

function FacultyDashboard() {
  const [studentsDrawerVisible, setStudentsDrawerVisible] = useState(false);
  const [moduleDrawerVisible, setModuleDrawerVisible] = useState(false);
  const [evaluationsDrawerVisible, setEvaluationsDrawerVisible] = useState(false);
  const [studentsList, setStudentsList] = useState([]);
  const [moduleList, setModuleList] = useState([]);
  const [evaluationsList, setEvaluationsList] = useState([]);


  const [showModuleModal, setShowModuleModal] = useState(false);
  const [showEvalModal, setShowEvalModal] = useState(false);
  const [form] = Form.useForm();


  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Students Enrolled',
      dataIndex: 'students',
      key: 'students',
      render: (students) => <span>{students.length} <a className={'text-xs	'} onClick={()=>{
        setStudentsDrawerVisible(true)
        setStudentsList(students);
      }}>(View Students)</a></span>
    },
    {
      title: 'Duraiton',
      dataIndex: 'duration',
      key: 'duration',
    }, 
    {
      title: 'Modules',
      dataIndex: 'modules',
      key: 'modules',
      render: (module) => <span>{module.length} <a className={'text-xs'} onClick={()=>{
        setModuleDrawerVisible(true)
        setModuleList(module);
      }}>(View Modules)</a></span>
    },
    {
      title: 'Evaluations',
      dataIndex: 'evaluations',
      key: 'evaluations',
      render: (evaluations) => <span>{evaluations.length} <a className={'text-xs'} onClick={()=>{
        setEvaluationsDrawerVisible(true)
        setEvaluationsList(evaluations);
      }}>(View Modules)</a></span>
    },
  ];
   

  const addEvalCompFn = (values) => {  
    const newVal = {...values, date: moment(values.date).format('DD/MM/YYYY hh:mm a')} 
    setShowEvalModal(false);
    const newEvalComp = [...evaluationsList,newVal ];
    setEvaluationsList(newEvalComp);
    message.success('New Evaluvation Component Added Successfully!');
  };

  const AddModuleFn = (values) => {   
    setShowModuleModal(false);
    const newMod = [...moduleList,values];
    setModuleList(newMod);
    message.success('New Module Added Successfully!');
  };

  return (
    <div className="">
        <Row justify={'center'}>
            <Col span={18} className={'mt-8 border-gray-200'} style={{borderBottomWidth:'thin'}}>
              <h1 className={'text-2xl'}>Faculty Dashboard</h1> 
            </Col>
        </Row>
        <Row justify={'center'}>
            <Col span={18} className={'mt-12'}>
              <h1 className={'text-xl'}>Courses assigned</h1> 
              <Table pagination={false} dataSource={coursesAssigned} columns={columns} /> 
            </Col>
        </Row>

        <Drawer
          title="Students Enrolled"
          width={520} 
          onClose={()=>setStudentsDrawerVisible(false)}
          visible={studentsDrawerVisible}
        >
          <Row justify={'center'}>
            <Col span={22} className={'mt-8'}> 
            {studentsList.map((student, index)=>{
              return (<div className={'flex items-center py-2 mb-1 border-gray-200'} style={{borderBottomWidth:'thin'}} key={index}>
                  <p className={'m-0 text-gray-500'}>{`${index+1}.`}</p>   
                  <p className={'m-0 ml-2 font-semibold text-gray-900'}>{student.name}</p>   
                  <p className={'m-0 ml-2 text-gray-400'}>{student.email}</p>
              </div>)
            })}
            </Col>
        </Row> 
        </Drawer>

        <Drawer
          title="Modules"
          width={520} 
          onClose={()=>setModuleDrawerVisible(false)}
          visible={moduleDrawerVisible}
        >
          <Row justify={'center'}>
            <Col span={22} className={'mt-8'}> 
            {moduleList.map((module, index)=>{
              return (<div className={'flex items-center py-2 mb-1 border-gray-200'} style={{borderBottomWidth:'thin'}} key={index}> 
                  <p className={'m-0 font-semibold text-gray-900'}>{module.name}</p>    
              </div>)
            })}
            </Col>
        </Row> 
        <Row justify={'end'}>
            <Col span={24} className={'mt-8'}>
              <div className={'flex justify-end'}>
                <Button size="large" type="primary" icon={<PlusOutlined />} className={'mt-4'} onClick={()=>setShowModuleModal(true)}>Add new</Button>   
              </div>
            </Col>
        </Row>
        </Drawer>

        <Drawer
          title="Evaluation components"
          width={520} 
          onClose={()=>setEvaluationsDrawerVisible(false)}
          visible={evaluationsDrawerVisible}
        >
          <Row justify={'center'}>
            <Col span={22} className={'mt-8'}> 
            {evaluationsList.map((evalutation, index)=>{
              return (<div className={'flex flex-col py-2 mb-1 border-gray-200'} style={{borderBottomWidth:'thin'}} key={index}> 
                  <p className={'m-0 font-semibold text-gray-900 text-lg'}>{evalutation.name}</p>   
                  <div className={'flex items-center justify-between'} >
                    <p className={'m-0 font-semibold text-gray-500'}>{`Date & Time: ${evalutation.date}`}</p>    
                    <p className={'m-0 ml-1 font-semibold text-gray-500'}>{`Total Marks: ${evalutation.totalMarks}`}</p>    
                  </div>
              </div>)
            })}
            </Col>
        </Row> 
        <Row justify={'end'}>
            <Col span={24} className={'mt-8'}>
              <div className={'flex justify-end'}>
                <Button size="large" type="primary" icon={<PlusOutlined />} className={'mt-4'} onClick={()=>setShowEvalModal(true)}>Add new</Button>   
              </div>
            </Col>
        </Row>
        </Drawer>

        <Modal title="Add Evaluation component" onCancel={()=>{setShowEvalModal(false)}} visible={showEvalModal} footer={false}>

        <Row justify={'center'}>
            <Col span={24} className={'mt-8'}>

            <Form 
                name="eval_comp" 
                onFinish={addEvalCompFn} 
              >
                <Form.Item 
                  name={"name"}
                  rules={[{ required: true, message: 'Please input Evaluvation name!' }]}
                >
                  <Input size={'large'}  placeholder={'Evalutaion Name'} />
                </Form.Item>   
                <Form.Item 
                  name={"type"}
                  rules={[{ required: true, message: 'Please input evaluvation type!' }]}
                > 
                  <Select placeholder={'Evaluvation type'} size="large">
                              <Option value="quiz">Quiz</Option>
                              <Option value="assignment">Assignment</Option> 
                            </Select>
                </Form.Item>   
                <Form.Item 
                  name={"date"} 
                  rules={[{ required: true, message: 'Please input date' }]}
                >
                  <DatePicker showTime format={'DD/MM/YYYY hh:mm a'} size="large" placeholder="Date and Time" className={'w-full'} />
                </Form.Item>   
                <Form.Item 
                  name={"totalMarks"}
                  rules={[{ required: true, message: 'Please input total marks' }]}
                >
                  <Input size={'large'} placeholder={'Total Marks'}/>
                </Form.Item>   

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add
                  </Button>
                </Form.Item>

              </Form>

            </Col>
        </Row>

            
      </Modal>
        <Modal title="Add New Module" onCancel={()=>{ setShowModuleModal(false)}} visible={showModuleModal} footer={false}>

        <Row justify={'center'}>
            <Col span={24} className={'mt-8'}>

            <Form 
                name="add_module" 
                onFinish={AddModuleFn} 
              >
                <Form.Item 
                  name={"name"}
                  rules={[{ required: true, message: 'Please input module name!' }]}
                >
                  <Input size={'large'}  placeholder={'Module Name'} />
                </Form.Item>  
                <Form.Item 
                  name={"desc"}
                  rules={[{ required: true, message: 'Please input module description!' }]}
                >
                  <Input size={'large'}  placeholder={'Module Description'} />
                </Form.Item>  

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add
                  </Button>
                </Form.Item>

              </Form>

            </Col>
        </Row>

            
      </Modal>

    </div>
  );
}

export default FacultyDashboard;
