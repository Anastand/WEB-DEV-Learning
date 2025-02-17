import Todocard from "./Todocard";
import Todoinput from "./Todoinput";

export default function Todolist(props) {
  const { todos } = props;
  const tab = "All";
  return (
    <>
      {todos.map((tab, tabindex) => {
        return <Todocard key={tabindex} tabindex={tabindex} {...props} />;
      })}
    </>
  );
}
