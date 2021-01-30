import React from 'react';
import { NavLink, Link } from 'react-router-dom';



function Sidebar() {

    return (
<div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item ">
         <>
         
             {/* <NavLink 
             to={location => ({ ...location, pathname: "/admin/home" })} 
             activeClassName="active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/home") 
          }
             >
               <a className="nav-link" href="javascript:;">
              <i className="material-icons">dashboard</i>
              <p>Accueil</p>
              </a>
             </NavLink>
             */}
          
            
          
           </>
          </li>


          {/* <li className="nav-item nav-link">
          <>
             <NavLink 
             to={location => ({ ...location, pathname: "/admin/membres" })} 
             activeClassName="nav-link active"
             isActive={(_, { pathname }) =>
            pathname.match("/admin/membres") 
          }
             >
              <i className="material-icons">person</i>
              <p>Membres</p>
             </NavLink>
            </>
            
          </li> */}
          <li className="nav-item ">
        
          
          <a className="nav-link" href="javascript:;">
            <Link to= {`/members`}>
              <div style={{ marginTop: "-25px" }} >
                <i className="material-icons">person</i>
                <p>Membres</p>
              </div>
              </Link>
          </a>
          
            
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="javascript:;">
              <Link to= {`/menuList`}>
              <div style={{ marginTop: "-25px" }} >
                <i className="material-icons">content_paste</i>
                <p>Menu</p>
                </div>
              </Link>
            </a>
          </li>
          
{/*           
          <li className="nav-item ">
            <a className="nav-link" href="./typography.html">
              <i className="material-icons">library_books</i>
              <p>Actions</p>
            </a>
          </li>
          
          <li className="nav-item ">
            <a className="nav-link" href="./notifications.html">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./rtl.html">
              <i className="material-icons">language</i>
              <p>RTL Support</p>
            </a>
          </li> */}
          
        </ul>
      </div>
  );
        }

export default Sidebar;