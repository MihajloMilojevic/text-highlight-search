import {createContext, useContext, useState, useEffect} from "react";

const StateContext = createContext();

export default function ContextProvider({children}) {
	
    const [searchText, setSearchText] = useState("");

	return (
		<StateContext.Provider
			value={{
				searchText, setSearchText
			}}
		>	
			{children}
		</StateContext.Provider>	
	)
}

export function useStateContext() {
	return useContext(StateContext)
}