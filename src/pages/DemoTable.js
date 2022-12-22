import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReuseTable from '../Table/ReuseTable'
const Tableheadings = [
    {
      title: 'Name',
    },
    {
      title: 'User Name',
    },
  
    {
      title: 'Email',
    },
    {
      title: 'Status',
    },
    {
      title: 'Action',
    },
  ];
  
 
const DemoTable = () => {
 const[state,setState]=useState([
  {
    name: 'demo',
    username: 'demo1',
    email: 'demo1@gmail.com',
    status: 'paid',
  },
  {
    name: 'demo2',
    username: 'demo2',
    email: 'demo2@gmail.com',
    status: 'paid',
  },
  {
    name: 'demo',
    username: 'demo3',
    email: 'demo3@gmail.com',
    status: 'paid',
  },
  {
    name: 'demo',
    username: 'demo4',
    status: 'paid',
    email: 'demo4@gmail.com',
   
  },
])
const Tabledata = {
  list: state,
  fields: ['name', 'username', 'email', 'status'],
};
    const rowClickFunction = (rowData) => {
    
        console.log((rowData))
 
        // navigate('/demo', {
        //   state: {
        //     ...rowData,
        //   },
        // });
      };
      const calldelete=(email)=>{
     const   someArray = state.filter(person => person.email != email.email);
      
        console.log(someArray)
        setState(someArray)
       

      }
      const actionButtons = [{
        delete: {
         text: <p>hii</p>,
          buttonFunction: calldelete,
          className: 'text-danger mx-2',
        }
       ,
        edit: {
          icon: <i className='bi bi-pencil-square '></i>,
          // buttonFunction: calledit,
          className: 'text-success',
        },
      }];
  return (
    <div>DemoTable
      
        <ReuseTable
        headings={Tableheadings}
        data={Tabledata}
        onRowClick={rowClickFunction}
        actions={actionButtons}
        />
    </div>
  )
}

export default DemoTable