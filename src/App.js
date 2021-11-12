
import Feedbar from "./components/feedbar/Feedbar";
import Header from "./components/Header";
import SidebarLeft from "./components/sidebarLeft/SidebarLeft";
import SidebarRight from "./components/sidebarRight/SidebarRight";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex border-4 h-full w-screen">
        <SidebarLeft />
        <Feedbar />
        <SidebarRight />
      </div>
    </div>
  );

}

export default App
