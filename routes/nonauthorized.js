import { StackNavigator } from 'react-navigation'
import { SplahScreen, Login, Register } from '../scenes'

const StackNavigatorConfig = {
  initialRouteName: 'SplahScreen',
  headerMode: 'none',
}

const Nonauthorized = StackNavigator({
  SplahScreen: {
    screen: SplahScreen,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register
  }
},StackNavigatorConfig)

export default Nonauthorized
