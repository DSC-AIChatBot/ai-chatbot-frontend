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
import { configure } from 'axios-hooks';
import axios from './utils/axios';
import UserContext, { useUser } from './utils/contexts/userContext';

function App() {
  configure({ axios: axios.axiosInstance });

  const {
    user, status,
  } = useUser();

  console.log(user, status);

  return (
    <UserContext.Provider
      value={{
        user,
        status,
      }}
    >
      {status ? (
        <Switch>
          {/* 로그인 상태인 경우 */}
          <Route exact path="/" component={Main}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/recordFeelSchedule" component={FeelCalendar}/>
          <Route path="/consultCheckList" component={Consulting}/>
          <Route path="/counselingCenterConnect" component={CounselingConnect}/>
          <Route path="/notfound" component={NotFound}/>
          <Route path="/test" component={ApiTestPage}/>
        </Switch>) : (
        <Switch>
          {/* 로그아웃 상태인 경우 */}
          <Route path="/" component={LogIn}/>
        </Switch>
      )}

    </UserContext.Provider>
  );
}

export default App;
