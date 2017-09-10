import { StackNavigator } from 'react-navigation'
import { Home } from '../scenes'

const StackNavigatorConfig = {
  initialRouteName: 'HomeScreen',
}

const Authorized = StackNavigator({
  HomeScreen: {
    screen: Home,
  },
},StackNavigatorConfig)

export default Authorized
