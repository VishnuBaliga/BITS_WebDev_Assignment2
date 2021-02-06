import React, { userEffect, useState } from "react";
import { Table, Row, Col,Drawer, Button } from 'antd';
import {coursesAssigned} from '../../../DataStore/';
import { PlusOutlined } from '@ant-design/icons'; 


function FacultyDashboard() {
  const [studentsDrawerVisible, setStudentsDrawerVisible] = useState(false);
  const [moduleDrawerVisible, setModuleDrawerVisible] = useState(false);
  const [evaluationsDrawerVisible, setEvaluationsDrawerVisible] = useState(false);
  const [studentsList, setStudentsList] = useState([]);
  const [moduleList, setModuleList] = useState([]);
  const [evaluationsList, setEvaluationsList] = useState([]);

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
  
  console.log("studentsList",studentsList);

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
                    <p className={'m-0 font-semibold text-gray-500'}>{`Date: ${evalutation.date}`}</p>    
                    <p className={'m-0 ml-1 font-semibold text-gray-500'}>{`Total Marks: ${evalutation.totalMarks}`}</p>    
                  </div>
              </div>)
            })}
            </Col>
        </Row> 
        <Row justify={'end'}>
            <Col span={24} className={'mt-8'}>
              <div className={'flex justify-end'}>
                <Button size="large" type="primary" icon={<PlusOutlined />} className={'mt-4'}>Add new</Button>   
              </div>
            </Col>
        </Row>
        </Drawer>
    </div>
  );
}

export default FacultyDashboard;
