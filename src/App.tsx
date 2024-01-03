import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "./styles/theme";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";
import { RoutesWrapper } from "./Routes/RoutesWrapper.routes";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications />
        <BrowserRouter>
          <RoutesWrapper />
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  );
};
