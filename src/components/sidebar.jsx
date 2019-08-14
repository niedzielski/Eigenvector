import React from 'react'

export function Sidebar({logoAttrs, portalsHTML}) {
  return (
    <div id="mw-panel">
      <div id="p-logo" role="banner">
        <a class="mw-wiki-logo" {...logoAttrs}></a>
      </div>
      <div dangerouslySetInnerHTML={{ __html: portalsHTML }} />
    </div>
  );
}