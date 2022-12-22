import React from 'react'
import ReuseTable from '../Table/ReuseTable'
const Tableheadings = [
    {
      title: 'First Name',
    },
    {
      title: 'Last Name',
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
    {
        title: 'address',
    }
  ];
  const Tabledata = {
    list: [
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
        email: 'demo4@gmail.com',
        status: 'paid',
      },
    ],
    fields: ['name', 'username', 'email', 'status'],
  };
const RenderTable = () => {
  return (
    <div>RenderTable
         <ReuseTable
        headings={Tableheadings}
        data={Tabledata}
        />
    </div>
  )
}

export default RenderTable