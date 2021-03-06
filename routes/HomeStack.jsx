import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

// const Stack = createStackNavigator();

const Stack = createNativeStackNavigator();

export default function Navigator({ asyncFunc }) {
  return (
    <NavigationContainer onReady={asyncFunc}>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}