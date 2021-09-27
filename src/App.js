import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routing/routes';
import Home from './Components/Dashboard/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={routes.DEFAULT} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
