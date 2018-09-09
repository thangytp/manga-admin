import React, { Componet } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss';

import App from "./js/components/App";

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));