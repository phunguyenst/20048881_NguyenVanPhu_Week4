import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import screen1 from "./screens/trang2a"
import screen2 from "./screens/trang2b"
import screen3 from './screens/trang2c'
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="screen1" component={screen1} options={{headerShown: false} }/>
      <Stack.Screen name="screen2" component={screen2} options={{headerShown: false} }/>
      <Stack.Screen name="screen3" component={screen3} options={{headerShown: false} }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}