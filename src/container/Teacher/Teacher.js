import React from 'react'
import './Teacher.css'
import TeacherHeader from '../../components/Teacher/TeacherHeader'
import axios from 'axios';


class Teacher extends React.Component{
    // state = {
    //     mydata : []
    // }
    // componentDidMount(){
    //     axios.get("http://localhost:3000/urs").then(res=>{
    //     console.log(res)
    //     this.setState({mydata : res.data})
    //     })
    //     }
       
    // render(){
    //     const mydata222 = this.state.mydata.map(hlists=>{
    //         return <TeacherBody hid={hlists._id} fname={hlists.fname} lname={hlists.lname} number={hlists.number}
    //          dob={hlists.dob} gender={hlists.gender} email={hlists.email} password={hlists.password}  />
             
    //         })
           render(){
        return(





            // // <div className="myteacher">

                <div className="header">

            <TeacherHeader>
                </TeacherHeader>
{/*        
            <h1>This is Main Teacher page..</h1> */}

            </div>

            // {mydata222}
            
            // {/* <div className="body">
            //     <TeacherBody />
            // </div> */}
            // </div>
            
         
            )
        }
    // }
// }
    }
export default Teacher