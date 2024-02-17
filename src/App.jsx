import ContextProvider from "./context/contextProvider";
import HomePage from "./pages";


function App() {
	return (
		<ContextProvider>
			<HomePage/>
		</ContextProvider>		
  	);
}

export default App;
