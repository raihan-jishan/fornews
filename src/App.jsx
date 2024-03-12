import { AppContext } from "./context/newsContext.jsx";
import Layout from "./layout/Layout.jsx";
function App() { 
  return (
    <AppContext>
      <div className="font-Montserrat bg-white dark:bg-zinc-900 dark:text-zinc-50">
        <Layout />
      </div>
    </AppContext>
  );
}
export default App;
