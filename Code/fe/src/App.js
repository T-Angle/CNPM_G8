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

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";


function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Access />
				</Route>
				<Route path="/homepage" exact>
					<Homepage />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/dashboard">
					<Dashboard></Dashboard>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
