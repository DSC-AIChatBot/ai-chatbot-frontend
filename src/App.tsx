import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ConsultCheckList from './pages/ConsultingPage';
import CounselingCenterConnect from './pages/CounselingConnectPage';
import LogIn from './pages/LogInPage';
import Main from './pages/MainPage';
import RecordFeelSchedule from './pages/FeelCalendarPage';
import SignUp from './pages/SignUpPage';
import ApiTestPage from './pages/ApiTestPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/logIn" component={LogIn}/>
      <Route path="/signUp" component={SignUp}/>
      <Route path="/recordFeelSchedule" component={RecordFeelSchedule}/>
      <Route path="/consultCheckList" component={ConsultCheckList}/>
      <Route path="/counselingCenterConnect" component={CounselingCenterConnect}/>

      {/* API Test Page */}
      <Route path="/test" component={ApiTestPage}/>
    </Switch>
  );
}

export default App;
