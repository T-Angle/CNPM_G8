import "./App.css";

//REACT ROUTER
import { BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Access from "./pages/Access";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<Router>
			<Route path="/" exact>
				<Access />
			</Route>
			<Route path="/homepage" exact>
				<Homepage />
			</Route>
		</Router>
	);
}

export default App;
