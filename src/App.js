import logo from './logo.svg';
import MainPage from './components/MainPage';
import Online from './components/Online';
import {Provider} from 'react-redux';

import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Online/> */}
        <MainPage/>
      </Provider>
    </div>
  );
}

export default App;
