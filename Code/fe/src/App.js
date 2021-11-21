import "./App.css";

//REACT ROUTER
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
} from "react-router-dom";

//pages
import Access from "./pages/Access";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<Router>
			<Route path="/" exact>
				<Access />
			</Route>
			<Route path="/homepage" exacst>
				<Homepage />
			</Route>
			<Route path="/dashboard">
				<Dashboard></Dashboard>
			</Route>
		</Router>
	);
}

export default App;
