import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import ModalCustom from "./components/ModalCustom/ModalCustom";

function App() {
  return (
    <Provider store={store}>
      <SideBar></SideBar>
      <Content></Content>
      <ModalCustom></ModalCustom>
    </Provider>
  );
}

export default App;
