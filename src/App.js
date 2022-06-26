import React from "react";
import './css/bootstrap.css';
import './css/palette.css';
// import { Toaster } from "react-hot-toast";
// import { useSelector } from "react-redux";
// import { useRoutes } from "react-router-dom";
// import routes from "./routes";
// import { Loading } from "./components";
import Item from "./components/Item";
import ErrorBoundary from "./components/ErrorBoundary";
// import { Container,Row,Col } from "react-bootstrap";

export default function App() {
  // const loading = useSelector((s) => s.loading.length !== 0);
  // const isLogged = useSelector((s) => s.isLogged);
  // const elements = useRoutes(routes(isLogged));

  const colors = ['blue', 'green', 'red', 'purple', 'orange'];
  let currentColor = 0;

  // View mode is 0, Edit mode is 1
  const [currentMode, setCurrentMode] = React.useState(0);

  const [projectList, setProjectList] = React.useState([
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
    { id: 3, title: "Project 3", description: "Description 3" },
    { id: 4, title: "Project 4", description: "Description 4" },
    { id: 5, title: "Project 5", description: "Description 5" },
    { id: 6, title: "Project 6", description: "Description 6" },
  ]);

  let itemList = [
    { text: "Item 1", url: "https://www.google.com", description: "Description 1", uid: "001", projectId: 1 },
    { text: "Item 2", url: "https://www.google.com", description: "Description 2", uid: "002", projectId: 1 },
    { text: "Item 3", url: "https://www.google.com", description: "Description 3", uid: "003", projectId: 1 },
    { text: "Item 4", url: "https://www.google.com", description: "Description 4", uid: "004", projectId: 2 },
    { text: "Item 5", url: "https://www.google.com", description: "Description 5", uid: "005", projectId: 2 },
    { text: "Item 6", url: "https://www.google.com", description: "Description 6", uid: "006", projectId: 3 },
    { text: "Item 7", url: "https://www.google.com", description: "Description 7", uid: "007", projectId: 3 },
    { text: "Item 8", url: "https://www.google.com", description: "Description 8", uid: "008", projectId: 4 },
    { text: "Item 9", url: "https://www.google.com", description: "Description 9", uid: "009", projectId: 4 },
    { text: "Item 10", url: "https://www.google.com", description: "Description 10", uid: "010", projectId: 5 },
    { text: "Item 11", url: "https://www.google.com", description: "Description 11", uid: "011", projectId: 5 },
    { text: "Item 12", url: "https://www.google.com", description: "Description 12", uid: "012", projectId: 5 },
    { text: "Item 13", url: "https://www.google.com", description: "Description 13", uid: "013", projectId: 6 },
  ]

  function modeButton() {
    if (currentMode === 0) {
      return (<button className="btn btn-primary" onClick={() => setCurrentMode(1)}>Switch to Edit Mode</button>)
    } else {
      return (<button className="btn btn-primary" onClick={() => setCurrentMode(0)}>Switch to View Mode</button>)
    }
  }

  function colSize() {
    if (currentMode === 0) { return (4) }
    else { return (12) }
  }


  let allContents = projectList.map((project) => {
    let projectItems = itemList.filter((item) => item.projectId === project.id);
    let subItems = projectItems.map((item) => (<Item
      key={item.uid}
      currentMode={currentMode}
      setCurrentMode={setCurrentMode}
      title={item.text}
      url={item.url}
      description={item.description}
      projectId={item.projectId} />))
    let hue = colors[currentColor]
    let projectClasses = `bg-${hue}-dark text-${hue}-bright`
    currentColor = (currentColor + 1) % colors.length;
    return (
      <div key={project.id} id={"project-" + project.id} className={`project col-${colSize()} ${projectClasses} m-2`}>
        <h2>{project.title}</h2>
        <div className="items">{subItems}</div>
      </div>)
  })


  return (
    <div className="App container bg-dark">
      <div className="row">
        <div id='modeButtonDiv' className="col-12">
          {modeButton()}
        </div>
      </div>
      <div className="row">
        <ErrorBoundary>
          {allContents}
        </ErrorBoundary>
      </div>
    </div>
  );
}
