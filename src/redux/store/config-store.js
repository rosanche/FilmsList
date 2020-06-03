import { createStore } from 'redux';
import films from '../resolvers/films-reducer';

export default createStore(films);