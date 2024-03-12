import Routes from "./Routes/Routes.jsx";
import BottomSlider from "./components/BottomSlider/BottomSlider.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { AppContext } from "./context/newsContext.jsx";
function App() {
  return (
    <AppContext>
      <div className="font-Montserrat bg-white dark:bg-zinc-900 dark:text-zinc-50">
        <div className="sticky top-0">
          <Nav />
          <BottomSlider />
          </div>
          <Routes />
        
      </div>
    </AppContext>
  );
}
export default App;
