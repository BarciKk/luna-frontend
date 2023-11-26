import { Box, Paper, Stack } from "@mantine/core";

function App() {
  return (
    <Box className="image-background">
      <Stack h="100%" justify="center" align="center">
        <Paper w="50%" mih={600} shadow="xl" withBorder></Paper>
      </Stack>
    </Box>
  );
}

export default App;
