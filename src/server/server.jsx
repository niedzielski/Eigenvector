import React from 'react'
import ReactDOMServer from 'react-dom/server'

export function renderServer() {
	const markup = ReactDOMServer.renderToString(
		<div>hello world!!!</div>
	)
	return { state: 'foo', markup };
};
