import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ShareCardDetails } from '@/features/ShareCardDetails/ShareCardDetails.tsx';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ShareCardDetails />
    </QueryClientProvider>
  );
}

export default App;
