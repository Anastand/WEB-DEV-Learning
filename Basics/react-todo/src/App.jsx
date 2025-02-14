import { Header } from "./components/Header";
import { TabHeader } from "./components/TabHeader";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

function App() {
  return (
    <>
      <Header />
      <TabHeader />
      <Todoinput />
      <Todolist />
    </>
  );
}

export default App;
