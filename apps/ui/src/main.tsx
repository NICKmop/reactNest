import ReactDOM from 'react-dom'
import App from './App.tsx'
import { Provider } from 'react-redux';
import './index.css'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import { thunk } from 'redux-thunk';
import Reducer from './_reducers/index.tsx';
// import 'antd/dist/antd.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
declare global{
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

ReactDOM.render(
    // <App />
    <Provider store={createStoreWithMiddleware(composeEnhancers)}>
      <App />
    </Provider>
  , document.getElementById('root'));




