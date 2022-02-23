import { QueryClient, QueryClientProvider } from "react-query";
import { CocktailRandomScreen } from './src/screens/CocktailRandomScreen';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const queryClient = new QueryClient();
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CocktailRandomScreen />
    </QueryClientProvider >
  );
}