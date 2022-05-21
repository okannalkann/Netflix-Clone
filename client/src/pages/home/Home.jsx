import { useEffect, useState } from "react"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
    
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzQzZGFhOWFiNjk2MTNjODIzZGY4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjAwNjU3NSwiZXhwIjoxNjUyNDM4NTc1fQ.evAqqQ6R5z2XkNZNZq9dD1dqHF-dnKqr24dWk4GBefo"
            }
          }
          );
        setLists(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
    }, [type, genre]);
    
  return (
    <div className="home">
        <Navbar/>
        <Featured type={type} />
        {lists.map((list, i) => (
        <List key={i} list={list} />
      ))}
    </div>
  )
}

export default Home