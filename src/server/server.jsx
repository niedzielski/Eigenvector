import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {Sidebar} from '../components/sidebar/sidebar.jsx'

export function renderServer(props) {
	const markup = ReactDOMServer.renderToString(
		<Sidebar {...props}>hello world!!!</Sidebar>
	)
	return { state: 'foo', markup };
};
