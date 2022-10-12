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
      
    ]
    const csvLink = {
      headers: headers,
      data: props.users,
      filename : "file.csv",
     
    }

  return (
    <div style={style}>

        <button ><CSVLink {...csvLink} style={{color:"white"}}>Download</CSVLink></button>
    </div>
  )
}

export default ExportCSV
