import React, { useEffect, useState } from 'react'
import GlobalLayout from '../componentts/GlobalLayout'
import HeadingBanner from '../componentts/HeadingBanner'
import {collection, doc, getDocs} from "firebase/firestore"
import { db } from '../firebase-config'
import ReactPaginate from 'react-paginate'
import ExportCSV from '../componentts/ExportCSV'
import { onAuthStateChanged } from 'firebase/auth'
import { useLocation, useParams } from 'react-router-dom'



const DashboardScreen = () => {

  let location = useLocation();
  const isComefromLOgin = true;
  const fetchFirebase  = async()=>{
    const data = await getDocs(userReference);
    setUsers(data.docs.map((doc)=>({...doc.data(),id : doc.id})));
    console.log(data);
}

  useEffect(()=>{
    if (!location.state.login)
    {
      isComefromLOgin = false;
    }
    fetchFirebase();
  },[]);

  const [users,setUsers] = useState([]);
  const userReference = collection(db,"user");

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;


  const displayUsers = users
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((user) => {
    return (
      <tr className='user'>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.choice}</td>
      </tr>
    );
  });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  if(isComefromLOgin)
  return (
    <GlobalLayout heading ="Home">
    <HeadingBanner text={"Welcome"} headerNav = {"Sign Out"} to={"/"} /> 
       <div className='userListBox'>
       <ExportCSV users = {users}/>
        
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Choice</th>
          </tr>
          {displayUsers}
 
        </table>        
      
        
        </div>
        <div className='dashBoardBottom'>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          pageClassName = {"pageNum"}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          />
        </div>
        
    </GlobalLayout>
  )
  else{
    return(
    <p>page not found</p>
    )
  }
}







export default DashboardScreen