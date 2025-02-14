export function TabHeader() {
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav>
      {tabs.map((tabs, tabsindex) => {
        return (
          <button key={tabsindex} className="tab-button">
            <h3>{tabs}</h3>
          </button>
        );
      })}
    </nav>
  );
}
