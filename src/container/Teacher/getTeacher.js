import React from 'react'
import './Teacher.css'
import TeacherBody from '../../components/Teacher/TeacherBody'
import TeacherHeader from '../../components/Teacher/TeacherHeader'
import axios from 'axios';
class getTeacher extends React.Component{
    state = {
        mydata : []
    }
    componentDidMount(){
        axios.get("http://localhost:3000/urs").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
       
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return <TeacherBody hid={hlists._id} fname={hlists.fname} lname={hlists.lname} number={hlists.number}
             dob={hlists.dob} gender={hlists.gender} email={hlists.email} password={hlists.password}  />
             
            })
           
        return(
            <div className="myteacher">


            {mydata222}
         
            </div>
            
         
            )
    }
}

export default getTeacher