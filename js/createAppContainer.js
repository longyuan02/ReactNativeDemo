import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    // eslint-disable-next-line no-undef
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
