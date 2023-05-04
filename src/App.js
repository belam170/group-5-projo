import Header from "./Header";
import Searchbar from "./Searchbar";
import About from "./About"
import Sidebar from "./Sidebar";
import ErrorBoundary from "./errorhandling";
function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Searchbar />
      <About />
    </div>
  );
}

export default App;

