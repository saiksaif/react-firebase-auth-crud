import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  // const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Products"), {
       ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label>Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleInput}
                />
              </div>
              <div className="formInput">
                <label>Category</label>
                <select id="category" onChange={(e)=>{setData({ ...data, ["category"]: e.target.value });}}>
                  <option value="">Pick a Category</option>
                  <option value="Fastfood">Fastfood</option>
                  <option value="Burger">Burger</option>
                  <option value="Desi">Desi</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Soups">Soups</option>
                </select>
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;