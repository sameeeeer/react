import React from 'react'
import '../Teacher/Teacher.css'
import axios from 'axios'
import { NavLink , Switch, Route} from 'react-router-dom'
import TeacherDynamic from '../../container/Teacher/TeacherDynamic'


class TeacherBody extends React.Component{
    DeleteTeacher = () =>{
        axios.delete('http://localhost:3000/del/' + this.props.hid)


    }
    render(){
    return(
        <div>
            <div className="teachereach">
                <h1>First name: {this.props.fname}</h1>
                <h2>Last name: {this.props.lname}</h2>
                <h4>Number: {this.props.number}</h4>
                <h4>DOB: {this.props.dob}</h4>
                <h4>Gender: {this.props.gender}</h4>
                <h4>Email: {this.props.email}</h4>
                <h4>Password: {this.props.password}</h4>
                
                <NavLink to={"/single/"+this.props.hid}>Teacher1 single </NavLink>

                <Switch>

                
               </Switch>

                <p><button onClick={this.DeleteTeacher}>Delete</button></p>
                </div>

                {/* <div className="teachereach">
                <h2>Samir Karki</h2>
                <p>Is a good Teacher.</>
                </div>

                <div className="teachereach">
                <h2>Samir Karki</h2>
                <p>Is a good Teacher.</p>

            </div> */}
        </div>
    )
}
}
export default TeacherBody