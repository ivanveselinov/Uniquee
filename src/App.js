import Feedbar from "./components/feedbar/Feedbar";
import Header from "./components/Header";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";
import SidebarRight from "./components/sidebarRight/SidebarRight";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SidebarLeft />
        <Feedbar />
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
