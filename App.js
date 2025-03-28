import { createStackNavigator } from '@react-navigation/stack';
import { getDatabase, ref, set } from 'firebase/database';
import Navigation from './app/navigation/navigation';

export default function App() {
  return <Navigation/>;
}
