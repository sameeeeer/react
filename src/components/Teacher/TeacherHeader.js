import React from 'react'
import {Route,NavLink, Switch } from 'react-router-dom';
import Test from '../Teacher/Test'
import Home from '../Teacher/Home';
import getTeacher from '../../container/Teacher/getTeacher';
import TeacherDynamic from '../../container/Teacher/TeacherDynamic'




const TeacherHeader = () =>{
    return(
//         <div className="container"> 
 
     

//      <Switch>

//  </Switch>

 <div className="container">



 
 <NavLink to ="/Test">Test </NavLink>
<NavLink to ="/Home">Home</NavLink>
 <NavLink to ="/Teacher11">Teacher</NavLink>

 <Switch>


 <Route path="/Test"  exact component={Test}/>
 <Route path="/Home" exact  component={Home}/>
 <Route path="/Teacher11"  exact component={getTeacher}/>
 <Route path="/single/:id" exact component={TeacherDynamic} />
 </Switch>

        </div>
    )
}
export default TeacherHeader