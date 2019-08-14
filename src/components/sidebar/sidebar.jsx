import React from 'react'
import {TogglePanel} from '../toggle-panel/toggle-panel.jsx'
import './sidebar.css'

export function Sidebar({logoAttrs, portalsHTML}) {
  return (
    <TogglePanel
      checkboxID="eigenvector-sidebar__checkbox"
      labelID="eigenvector-sidebar__label"
      label="Sidebar"
      ltr={true}
      className="eigenvector-sidebar">
      <div id="mw-panel">
        <div id="p-logo" role="banner">
          <a class="mw-wiki-logo" {...logoAttrs}></a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: portalsHTML }} />
      </div>
    </TogglePanel>
  );
}
