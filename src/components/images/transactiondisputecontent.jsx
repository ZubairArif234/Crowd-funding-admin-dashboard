









import { Table , message} from 'antd';
import qs from 'qs';
import { useEffect, useState } from 'react';


const Transactiondisputecontent = () => {
    
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const success = () => {
        message.success('Dispute Accepted');
      };
    const reject = () => {
        message.error('Dispute Rejected');
      };
    const columns = [
        {
          title: 'Transaction ID',
          dataIndex: 'email',
        },
      {
        title: 'Transaction Date',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: '100%',
      },
      {
        title: 'Transaction Amount',
        dataIndex: 'gender',
       
        
      },
      {
        title: 'Transaction Method',
        dataIndex: 'email',
      },
      {
        title: 'Sender',
        dataIndex: 'gender',
      },
      {
        title: 'Receiver',
        dataIndex: 'gender',
      },
     
      {
        title: 'Dispute Catagories',
        dataIndex: 'gender',
        render: () => {return <p  >late transaction</p>},
      },
      {
        title: 'Dispute',
        dataIndex: 'email',
        render: () => {return <p  >late transaction</p>},
      },
      {
        title: 'Actions',
        dataIndex: 'email',
        render: () => {return <div style={{display:'flex'}}> <button  onClick={success} style={{backgroundColor:'#03AEF0' , border:'none' , borderRadius:'5px' , padding:'5px 10px' , color:'white' , fontFamily:'Rubik' , fontSize:'13px', marginRight:'5px'}}> <i className="fa-solid fa-check" style={{color:'white'}}></i></button> <button onClick={reject} style={{backgroundColor:'#FF3D41' , border:'none' , borderRadius:'5px' , padding:'5px 10px' , color:'white' , fontFamily:'Rubik' , fontSize:'13px'}}><i className="fa-solid fa-xmark" style={{color:'white'}}></i></button></div>},
      },
    ];
    const getRandomuserParams = (params) => ({
      results: params.pagination?.pageSize,
      page: params.pagination?.current,
      ...params,
    });


  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <>
    <p className='addcreatorheading'>Pending Transaction</p>
    <div >


    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      style={{overflow:'auto'}}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      />

      </div>


     
      </>
  );
};
export default Transactiondisputecontent;