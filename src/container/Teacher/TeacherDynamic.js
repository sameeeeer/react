import React from 'react'
import './Teacher.css'

class TeacherDynamic extends React.Component{
 render(){
 return(
 <div className="teachereach">{this.props.match.params.id}</div>
    )
    }
   }
   export default TeacherDynamic