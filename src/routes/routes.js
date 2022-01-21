import {  Routes, Route } from 'react-router-dom';

import PrivateRoute from './RouteConfig';

import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Ranking from '../pages/Ranking/Ranking';
import Challenges from '../pages/Challenges/Challenges';
import Analytics from '../pages/Analytics/Analytics';
import AnalyticsAdvanced from '../pages/Analytics/AnalyticsAdvanced';


export default function RoutesPages(){
  return(
      <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route element={<PrivateRoute />}>
          <Route exact path='/home'  element={<Home />} />
          
          <Route exact path='/profile' element={<Profile  />} />
          <Route exact path='/ranking' element={<Ranking />} />
          <Route exact path='/challenges' element={<Challenges />} />
          <Route exact path='/analytics' element={<Analytics />} />
          <Route exact path='/advancedAnalytics' element={<AnalyticsAdvanced />} />
          </Route>
      </Routes>
    )
}