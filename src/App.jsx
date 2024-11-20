import TopNav from "./components/Nav/TopNav/TopNav";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import classes from "./App.module.css"

const App = () => {
  return (
    <div>
      <TopNav />
      <div className={classes["main-container"]}>
        <Header />
        <Content />
      </div>
    </div>
  );
};
export default App;
