import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
const ReuseTable = ({headings,data,onRowClick,actions}) => {
    const [startIndex] = useState(1);
    let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  return (
    <div>ReuseTable
        <Table responsive>
      <thead>
      <tr className='bg-light text-center border-white'>
              { <th>SR No.</th>}
              {headings.map((heading, index) => (
                <th
                  key={`heading${index}`}
                  className={`text-center ${heading.className}`}
                >
                  {heading.title}
                </th>
              ))}
            </tr>
      </thead>
      <tbody>
            {data && data.list.length === 0 ? (
              <tr>
                <td className='text-center' colSpan={headings.length + 1}>
                  No data Available
                </td>
              </tr>
            ) : (
             <>
              {data.list.map((value,index1) => (
                  <tr
                    key={`row-${index1}`}
                    onClick={() => {
                      if (onRowClick) {
                        onRowClick(value);
                      }
                    }}
                    className='text-center'
                  >
                    { <td>{index1 + startIndex}</td>}
                    {data.fields.map((field,index2) => (
                      <td
                        key={`row-${index1}${index2}`}
                        data-label={headings[index2]?.title}
                       
                      >
                        {value[field]}
                      </td>
                    ))}
                    {actions && (
                      <td>
                        <div className='text-center'>
                          {actions.map((action, index) => (
                            <span
                              key={`action${index}`}
                              // className={action.className}
                              onClick={() => {
                                if (action.delete.buttonFunction)
                                  action.delete.buttonFunction(value);
                              }}
                            >
                              {action.delete.text}
                            </span>
                          ))}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
             </>
            )}
           
          </tbody>
          <Pagination>{items}</Pagination>
    </Table>
    </div>
  )
}

export default ReuseTable