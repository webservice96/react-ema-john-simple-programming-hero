import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Dashboard, Shop, OrderReview, PlaceOrder } from './components';

function App() {
	return (
		<Router>
			<div className="App">
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Shop />
					</Route>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/order-review">
						<OrderReview />
					</Route>
					<Route path="/placeorder">
						<PlaceOrder />
					</Route>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default App;