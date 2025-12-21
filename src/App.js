import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import MainView from './components/MainView';

export default function App() {
  
  return (
    <Box m="12px">
      <Header title="Tune Me Up, Scotty!" />
      <MainView />
    </Box>
  );
};
