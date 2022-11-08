import React from 'react'
import { CSVLink } from 'react-csv'

const ExportCSV = (props) => {

    const style = {
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingTop:4,
    }

    const headers = [
    
        {label:"Name" , key: "name"},
        {label:"Email" , key: "email"},
        {label:"Mobile" , key: "mobile"},
        {label:"Choice" , key: "choice"},
        {label:"Reason" , key: "reason"},
    ]
    const csvLink = {
      headers: headers,
      data: props.users,
      filename : "file.csv",
     
    }

  return ( 
        <button className='downloadBtn' ><CSVLink {...csvLink} style={{color:"white"}}>Download</CSVLink></button>
  )
}

export default ExportCSV
