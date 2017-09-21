import { AppRegistry } from 'react-native';

// @todo remove when RN upstream is fixed
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

import Example from './src/main';
import Share from './src/share';

AppRegistry.registerComponent('Example', () => Example);
AppRegistry.registerComponent('ShareEx', () => Share);

