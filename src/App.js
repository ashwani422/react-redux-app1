import './App.css';
import { Provider } from 'react-redux'

import store from './redux/store';
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UsersContainer from './components/UsersContainer'

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <UsersContainer />
    </Provider>
  );
}

export default App;
