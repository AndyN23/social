// import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './state/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMessage, updateNewPostText} from './state/state';
import { BrowserRouter } from 'react-router-dom';


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
              <App  
                state={state} 
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
} 

renderEntireTree(state);

subscribe(renderEntireTree);