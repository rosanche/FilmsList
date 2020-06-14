import { combineReducers } from 'redux';

import films from './films-reducer';
import categories from './categories-reducer';

export default combineReducers({films, categories});