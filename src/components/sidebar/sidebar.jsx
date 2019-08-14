import React from 'react'
import './sidebar.css'

export function Sidebar({logoAttrs, portalsHTML}) {
  return (
    <div class="eigenvector-sidebar" id="mw-panel">
      <div id="p-logo" role="banner">
        <a class="mw-wiki-logo" {...logoAttrs}></a>
      </div>
      <div dangerouslySetInnerHTML={{ __html: portalsHTML }} />
    </div>
  );
}
