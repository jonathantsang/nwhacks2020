import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen";
import LoginScreen from './LoginScreen';
import MapScreen from './MapScreen';
import WalletScreen from './WalletScreen';
import ReceiptScreen from './ReceiptScreen';
const MainNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  Map:{screen:MapScreen},
  Wallet:{screen:WalletScreen},
  Receipt:{screen:ReceiptScreen}
});

const App = createAppContainer(MainNavigator);

export default App;