import logo from "./logo.svg";
import "./App.css";
import SocialContact from "./Component/Header/SocialContact";
import Header from "./Component/Header/Header";
import Nav from "./Component/Header/SlidePage";
import AboutUs from "./Component/AboutUs.js/AboutUs";
import ProductPage from "./Component/ProductDerive/ProductPage";
import FactQst from "./Component/Contact/FactQst";
import Footer from "./Component/Footer/Footer";
import SponsorPage from "./Component/Sponsor/SponsorPage";
import HelpPage from "./Component/Help/HelpPage";

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import ContactPage from "./Component/Contact/ContactPage";
import ObjectifPage from "./Component/Objectif/ObjectifPage";
import TeamPage from "./Component/Team/TeamPage";
import ActionPage from "./Component/Actions/ActionPage";
import DetailPage from "./Component/Actions/DetailAction/DetailPage";
import TestTwo from "./Component/Testtwo";
import SlidePage from "./Component/Header/SlidePage";
import ProjectPage from "./Component/Project/ProjectPage";
import InnerPage from "./Component/InnerPage/InnerPage";
import DocumentEnfantPage from "./Component/InnerPage/DocumentEnfantPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
          <Switch>
            
            <Route exact path="/doc">
            <SocialContact></SocialContact>
             <Header></Header>
              <InnerPage></InnerPage>
              <Footer></Footer>
              
            </Route>

            <Route path="/">
            <SocialContact></SocialContact>
        <Header></Header>
        <SlidePage></SlidePage>
        <AboutUs></AboutUs>
        <ObjectifPage></ObjectifPage>
      
        <ProductPage></ProductPage>
        <HelpPage></HelpPage>
        <SponsorPage></SponsorPage>
        <ProjectPage></ProjectPage>
        <ContactPage></ContactPage>
        
        
       
        <Footer></Footer>
            
            </Route>
          </Switch>
        </Router>

      
        

        {/*         

         */}
      </div>
    </Provider>
  );
}

export default App;

/*
 <SlidePage></SlidePage>
        <AboutUs></AboutUs>
        <ObjectifPage></ObjectifPage>

        <ProductPage></ProductPage>
        <HelpPage></HelpPage>
        <TeamPage></TeamPage>

        <SponsorPage></SponsorPage>
        <ContactPage></ContactPage>
        <ProjectPage></ProjectPage>
         <h5>{props.document.path_doc}</h5>
        */

        