import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Consulting from './pages/Consulting';
import CounselingConnect from './pages/CounselingConnectPage';
import LogIn from './pages/LogInPage';
import Main from './pages/MainPage';
import FeelCalendar from './pages/FeelCalendarPage';
import SignUp from './pages/SignUpPage';
import NotFound from './pages/NotFoundPage';
import ApiTestPage from './pages/ApiTestPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/logIn" component={LogIn}/>
      <Route path="/signUp" component={SignUp}/>
      <Route path="/recordFeelSchedule" component={FeelCalendar}/>
      <Route path="/consultCheckList" component={Consulting}/>
      <Route path="/counselingCenterConnect" component={CounselingConnect}/>
      <Route path="/notfound" component={NotFound}/>

      {/* API Test Page */}
      <Route path="/test" component={ApiTestPage}/>
    </Switch>
  );
}

export default App;
