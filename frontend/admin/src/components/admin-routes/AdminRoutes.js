import React,{useState} from 'react';
// import ListRubriques from "../user-routes/list-documents/List-Document"
import Menu from "./Menu/Menu"
// import ListActions from "./users-list/UsersList"
import MembersPage from "./List-members/MembersPage"



import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  
} from "react-router-dom"

function AdminRoutes({setUser ,user,cookies}) {
 
  let { path } = useRouteMatch()
  return (
    <>
     <Switch>
         <>
         <Route exact path={`${path}/`}>
             <Redirect to={`${path}/home`} />
         </Route>
         <Route exact path="/members">
            <MembersPage setUser={setUser} user={user} cookies={cookies}/>
          </Route>
       
          <Route exact path="/members">
            <MembersPage setUser={setUser} user={user} cookies={cookies}/>
          </Route>
          
         </>
        </Switch>
    <Route exact path="/admin">
    <Menu setUser={setUser} user={user} cookies={cookies}/>

           
    </Route>
         </>
  //   <>
  //   {user === undefined ? (
  //     <>
  //     <Login setUser={setUser} user={user} cookies={cookies}/>
  //     </>

  //   ) : (
  //     <>
  //     <div className="pages-container">
  //      <div className="container">
  //        <div className="row navigation-menu">
  //          <Menu setUser={setUser} user={user} cookies={cookies}/>
  //        </div>
  //        <div className="content">
  //         <div className="routes">
      
  //            <Switch>
  //       <>
  //       <Route exact path={`${path}/`}>
  //           <Redirect to={`${path}/home`} />
  //       </Route>
       
  //        <Route exact path={`${path}/membres`}>
  //          <ListMembers setUser={setUser} user={user} cookies={cookies}/>
  //        </Route>
  //        <Route  exact path={`${path}/rubriques`}>
  //          <ListRubriques setUser={setUser} user={user} cookies={cookies}/>
  //        </Route>
  //        <Route  exact path={`${path}/actions`}>
  //          <ListActions setUser={setUser} user={user} cookies={cookies}/>
  //        </Route>
  //       </>
  //      </Switch>
   
  //         </div>
  //        </div>
  //        <div className="footer">

  //        </div>
  //      </div>
  //  </div>
  //     </>
  //   )}
     
  //  </>
  );
}

export default AdminRoutes;
