export function TabHeader(props) {
  const { todos } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav>
      {tabs.map((tabs, tabsindex) => {
        let todonumber = 0;
        if (tabs == "All") {
          todonumber = todos.length;
        } else if (tabs == "Open") {
          todonumber = todos.filter((val) => val.complete == false).length;
        } else {
          todonumber = todos.filter((val) => val.complete == true).length;
        }
        return (
          <button key={tabsindex} className="tab-button">
            <h3>
              {tabs}
              <span> ({todonumber}) </span>
            </h3>
          </button>
        );
      })}
    </nav>
  );
}
