import { QueryClient, QueryClientProvider } from "react-query";
import { CocktailRandomScreen } from './src/screens/CocktailRandomScreen';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CocktailRandomScreen />
    </QueryClientProvider >
  );
}