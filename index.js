// [ARQUIVO: index.js] (Atualizado)

import 'react-native-gesture-handler'; // <-- ADICIONE ESTA LINHA NO TOPO

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);