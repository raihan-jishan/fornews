import Layout from "./Layout/Layout.jsx";
import { AppContext } from "./context/newsContext.jsx";
import { Routes } from "./utils/index.jsx";
function App() {
  return (
    <AppContext>
      <Layout>
        <Routes /> 
      </Layout>
    </AppContext>
  );
}
export default App;
