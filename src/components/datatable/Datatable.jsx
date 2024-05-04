import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { prodColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "Products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list)
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleEdit = async (id) => {
    try {
      const productRef = doc(db, "Products", id);
      const productDoc = await getDoc(productRef);
      const newStatus = productDoc.data().status === "Available" ? "Unavailable" : "Available";
      await updateDoc(productRef, { status: newStatus });
      setData(
        data.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Products", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // let status = params.row.status == "Available" ? "on" : "off"
        return (
          <div className="cellAction">
            <div
              className="editButton"
              onClick={() => handleEdit(params.row.id)}
            >
              Toggle
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <div style={{overflowX: "auto"}}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={prodColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
        />
      </div>
    </div>
  );
};

export default Datatable;