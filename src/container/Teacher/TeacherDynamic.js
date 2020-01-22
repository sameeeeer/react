import React from 'react'
import './Teacher.css'
import axios from 'axios'

class TeacherDynamic extends React.Component{
   state = {
      teacher_data : []
   }
 componentDidMount(){
    axios.get("http://localhost:3000/users/single/"+this.props.match.params.id).then(res =>{
this.setState({teacher_data : res.data})
 })
 }
 render(){
 return(
 <div className="teachereach">
    {/* Id of the user <b>{this.props.match.params.id}</b></div> */}
 <div>{this.state.teacher_data.fname}</div>
 <div>{this.state.teacher_data.lname}</div>
 </div>

    )
    }
   }
   export default TeacherDynamic