import { Header } from "./components/Header";
import { TabHeader } from "./components/TabHeader";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

function App() {
  const todo_List = [
    { input: "todo 1", complete: true },
    { input: "todo 2", complete: false },
    { input: "todo 3", complete: true },
    { input: "todo 4", complete: false },
    { input: "todo 5", complete: true },
  ];
  return (
    <>
      <Header todos={todo_List} />
      <TabHeader todos={todo_List} />
      <Todoinput />
      <Todolist todos={todo_List} />
      <Todocard />
    </>
  );
}

export default App;
