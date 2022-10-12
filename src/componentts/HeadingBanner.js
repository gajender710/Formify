
import React from "react"
import { Link } from "react-router-dom"
import '../App.css'

import { auth } from "../firebase-config"
import { signOut } from "firebase/auth"

const HeadingBanner = (props) => {

    const logOut = async ()=>{
        try{ await signOut(auth);}
        catch(error){
         console.log(error);
         }
     }

    const clickHandler=()=>{
        if(props.headerNav == "Sign Out")
        {
            logOut();
        }
    }
    
    return (
        <div >
            <div className="homeDash">
            <div></div>
                <h4 onClick={clickHandler} ><Link to={`${props.to}`} >{props.headerNav}</Link> </h4>  
            </div>
            <div className ="bannerbg">
                <p className="bannerText">{props.text}</p>
            </div>
                     
        </div>

    )
}

export default HeadingBanner

// const styles = StyleSheet.create({
//     background: {
//         width: '100%',
//         height: 65,
//     },
//     headingView: {
//         marginTop:20,
//         marginLeft:16,
//     },
//     logo: {
//         // height: Dimensions.get('screen').height / 11,
//         // width: Dimensions.get('screen').width / 4,
//         marginLeft:'2%',
//         marginTop:4,
        
//     },

// })