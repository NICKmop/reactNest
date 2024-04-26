import App from './App.tsx';
import './index.css';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container!); // TypeScript 사용 시 createRoot(container!)로 적용

root.render(<App />);

// declare global{
//   interface Window{
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

// ReactDOM.render(
//     // <App />
//     <Provider store={createStoreWithMiddleware(composeEnhancers)}>
//       <App />
//     </Provider>
//   , document.getElementById('root'));