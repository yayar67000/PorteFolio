import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";

//import the main component

import App from "./App.tsx";

// Import pages

import Accueil from "./pages/Accueil/Accueil.tsx";
import Musique from "./pages/Musique/Musique.tsx";
import Parcours from "./pages/Parcours/Parcours.tsx";
import Productions from "./pages/Productions/Productions.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/Musique",
				element: <Musique />,
			},
			{
				path: "/Parcours",
				element: <Parcours />,
			},
			{
				path: "/Productions",
				element: <Productions />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
