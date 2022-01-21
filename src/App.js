import {Provider} from 'react-redux';
import store from './redux/store/store';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomeView from './views/HomeView';
import AddValueView from './views/AddValueView';
import SubValueView from './views/SubValueView';

const App = ()=>{
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/addValue' element={<AddValueView/>}/>
                    <Route path='/subValue' element={<SubValueView/>}/>
                    <Route path='/' element={<HomeView/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
export default App;
