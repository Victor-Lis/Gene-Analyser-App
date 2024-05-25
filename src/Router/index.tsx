import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './Tab';

export function Router() {
  return (
    <NavigationContainer>
        <BottomTab/>
    </NavigationContainer>
  );
}