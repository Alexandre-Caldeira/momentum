import React from 'react';
import { 
  createAppContainer, 
  createSwitchNavigator
} from 'react-navigation';

// Desabilitar alertas warning:
// LogBox.ignoreAllLogs(disable);

// View
import Home from './src/views/Home';
import Task from './src/views/Task';
import Sync from './src/views/Sync';

//TODO: https://software.intel.com/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
    Sync
  })
);

export default function App() {
  return (
    <Routes/>
  );
}


