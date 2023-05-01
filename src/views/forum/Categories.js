import React, {useMemo}from "react";
import Table from "./CategoryTable.js";
const categoriesData = () => {
    const data = [
    {
      categoryID: 1001,
      category: 'Families',
      Threads: '2K',
      Messages: '1.8M', 
      Views: '203.9M',
      icon:"https://tattle.life/members/giusthegoss.345383/"
    },
    {
        categoryID: 1002,
        category: 'Families',
        Threads: '2K',
        Messages: '1.8M', 
        Views: '203.9M',
        icon:"https://tattle.life/members/giusthegoss.345383/"
      },
      {
        categoryID: 1003,
        category: 'Families',
        Threads: '2K',
        Messages: '1.8M', 
        Views: '203.9M',
        icon:"https://tattle.life/members/giusthegoss.345383/"
      },
      {
        categoryID: 1004,
        category: 'Families',
        Threads: '2K',
        Messages: '1.8M', 
        Views: '203.9M',
        icon:"https://tattle.life/members/giusthegoss.345383/"
      },
      {
        categoryID: 1005,
        category: 'Families',
        Threads: '2K',
        Messages: '1.8M', 
        Views: '203.9M',
        icon:"https://tattle.life/members/giusthegoss.345383/"
      },
  ];
   return [data]
  }
function Blogs(){
    const columns = useMemo(() => [
        {
          Header: "Customer",
          accessor: "customer",
        },
        {
          Header: "Deposit",
          accessor: "deposit",
        },
        {
          Header: "Date",
          accessor: "date",
        },
        {
          Header: "Voucher NO.",
          accessor: "voucherNo",
        },
        {
          Header: "Trans.Status",
          accessor: "status",
        },
  
  ], []);
  
    const data = useMemo(() => categoriesData(), []);
    return (
        <Table data={data[0]} />
    )
}
export default Blogs;