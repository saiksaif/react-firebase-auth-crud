export const prodColumns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "name",
      headerName: "Name",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
    {
      field: "productType",
      headerName: "Product Type",
      width: 120,
    },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.imageUrl ? "Yes" : "No"}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            Rs. {params.row.price}
          </div>
        );
      },
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.discount}%
          </div>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.quantity}
          </div>
        );
      },
    },
    {
      field: "time",
      headerName: "Time",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.time} mins
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];