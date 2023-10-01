import Marketplace from "./pages/Marketplace"
import Home from "./pages/Home"
import Trade from "./pages/Trade";
import './App.css';
import { BaseProvider, LightTheme, DarkTheme } from "baseui";
import { Provider as StyletronProvider } from 'styletron-react';
import {withStyle, useStyletron} from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';

const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
    <BaseProvider theme={DarkTheme}>
      <Home/>
      <Marketplace/>
      <Trade/>
    </BaseProvider>
    </StyletronProvider>
  )
}

export default App