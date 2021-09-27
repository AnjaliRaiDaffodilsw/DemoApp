import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import BarCharts from '../Graph/BarChart/BarGraph';
import PieCharts from '../Graph/PieChart/PieCharts';
import routes from '../../routing/routes';
import Maps from '../Map/Maps';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Router >
        <div className="link-element">
          <ul >
            <li>
              <Link to={routes.BARCHART} >BarCharts</Link>
            </li>
            <li>
              <Link to={routes.PIECHART} >PieCharts</Link>
            </li>
            <li>
              <Link to={routes.MAPS} >Maps</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={routes.BARCHART}>
            <BarCharts />
          </Route>
          <Route path={routes.PIECHART}>
            <PieCharts />
          </Route>
          <Route path={routes.MAPS}>
            <Maps />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Home;
