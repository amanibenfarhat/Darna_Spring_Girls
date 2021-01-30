import React ,{useState } from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import {BrowserRouter  as Router ,Link,Redirect,Route,Switch} from "react-router-dom";
// import UserRoutes from "./components/user-routes/UserRoutes"
import AdminRoutes from "./components/admin-routes/AdminRoutes"
import MembersPage from "./components/admin-routes/List-members/MembersPage"
import Menu from "./components/admin-routes/Menu/Menu"
import Footer from "./components/admin-routes/Menu/Footer"
import Login from "./components/admin-routes/Login/Login"
import SignUp from "./components/admin-routes/SignUp/SignUp"
import './store.js'
import CreateMember from './components/admin-routes/List-members/CreateMember';
import { Provider } from 'react-redux';
import store from './store';
import MemberDetails from './components/admin-routes/List-members/MemberDetails';
import MenuList from './components/admin-routes/List-rubriques/MenuList';
import RubriquesAccueil from './components/admin-routes/List-rubriques/accueil/RubriquesAccueil'
import PresentationPage from './components/admin-routes/List-rubriques/accueil/Presentation/PresentationPage'
import CreatePresentation from './components/admin-routes/List-rubriques/accueil/Presentation/CreatePresentation';
import ObjectifsPage from './components/admin-routes/List-rubriques/accueil/Objectifs/ObjectifsPage';
import CreateObjectif from './components/admin-routes/List-rubriques/accueil/Objectifs/CreateObjectif';
import SponsorsPage from './components/admin-routes/List-rubriques/accueil/NosSponsors/SponsorsPage';
import CreateSponsor from './components/admin-routes/List-rubriques/accueil/NosSponsors/CreateSponsor';
import ProjetsPage from './components/admin-routes/List-rubriques/projets/ProjetsPage';
import CreateProjet from './components/admin-routes/List-rubriques/projets/CreateProjet';
import AiderPage from './components/admin-routes/List-rubriques/aider/AiderPage';
import CreateAider from './components/admin-routes/List-rubriques/aider/CreateAider';
import ContactPage from './components/admin-routes/List-rubriques/contact/ContactPage';
import ActionPage from './components/admin-routes/List-rubriques/actions/ActionPage';
import ActionDetails from './components/admin-routes/List-rubriques/actions/ActionDetails';
import CreateAction from './components/admin-routes/List-rubriques/actions/CreateAction';
import ParticipantPage from './components/admin-routes/List-rubriques/actions/ParticipantsPage';
import SponsorDetails from './components/admin-routes/List-rubriques/accueil/NosSponsors/SponsorDetails';
import LienPage from './components/admin-routes/List-rubriques/lien/LienPage'
import LienDetails from './components/admin-routes/List-rubriques/lien/LienDetails';




function App() {
  
 
  return (
    <Provider store={store}>
    <div className="App"> 
    {/* <Router>
    <Route exact path="/">
      <Redirect to={'/login'} setUser={setUser} user={user} cookies={cookies}/>
    </Route>
    <Route exact path="/login">
        <Login setUser={setUser} user={user} cookies={cookies}/>
    </Route>
    </Router> */}
    
    <Router>
        <Switch>
        <>
        <Redirect from="/" to="/login" />

        <Route  exact path="/rubriques_lien">
            <Menu/>
            <LienPage />
         </Route>

         <Route exact path="/rubriques_lien/:lienId">
            <Menu/>
            <LienDetails />
         </Route>

        <Route  exact path="/create_projet">
            <Menu/>
            <CreateProjet/>
         </Route>

        <Route  exact path="/rubriques_projets">
            <Menu/>
            <ProjetsPage />
            <Footer/>
         </Route>

         <Route  exact path="/rubriques_aider">
            <Menu/>
            <AiderPage />
            <Footer/>
         </Route>

         <Route  exact path="/rubriques_contact">
            <Menu/>
            <ContactPage />
            <Footer/>
         </Route>

         <Route  exact path="/rubriques_actions">
            <Menu/>
            <ActionPage />
         </Route>

         

         <Route  exact path="/create_aider">
            <Menu/>
            <CreateAider/>
         </Route>

         <Route exact path="/rubriques_actions/:actionId">
            <Menu/>
            <ActionDetails/>
         </Route>

         <Route exact path="/rubriques_actions/:actionId/participants">
            <Menu/>
            <ParticipantPage />
         </Route>

         <Route exact path="/create_action">
            <Menu/>
            <CreateAction/>
            <Footer/>
         </Route>


        <Route  exact path="/create_sponsor">
            <Menu/>
            <CreateSponsor/>
         </Route>

        <Route  exact path="/nos_sponsors">
            <Menu/>
            <SponsorsPage/>
         </Route>

         <Route exact path="/nos_sponsors/:sponsorId">
            <Menu/>
            <SponsorDetails />
         </Route>

        <Route  exact path="/create_objectif">
            <Menu/>
            <CreateObjectif/>
         </Route>

        <Route  exact path="/objectifs">
            <Menu/>
            <ObjectifsPage/>
         </Route>
        <Route  exact path="/create_presentation">
            <Menu/>
            <CreatePresentation/>
         </Route>
        <Route exact path="/members/:memberId">
          <Menu/>
          <MemberDetails/>
        </Route>
        <Route exact path="/members">
          <Menu/>
          <MembersPage/>
        </Route>
        <Route exact path="/menuList">
          <Menu/>
          <MenuList/>
        </Route>
        <Route exact path="/rubriques_accueil">
          <Menu/>
          <RubriquesAccueil />
        </Route>
        <Route exact path="/presentation">
          <Menu/>
          <PresentationPage/>
        </Route>
        
        
        <Route  path="/admin">
          <AdminRoutes  />
         </Route>
          
         <Route  path="/login">
          <Login  />
         </Route>
         <Route  path="/signup">
          <SignUp  />
         </Route>
         <Route  exact path="/create_member">
            <Menu/>
            <CreateMember/>
         </Route>
         <Route  path="/edit/:id">
            <Menu/>
            <CreateMember />
         </Route>
          </>
        </Switch>
       
      </Router>
   
      
     
    </div>
    </Provider>
  );
}

export default App;
