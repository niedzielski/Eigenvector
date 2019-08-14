import React from 'react'
import './toggle-panel.css'

export function TogglePanel({className, checkboxID, labelID, label, ltr, children}) {
  return (
    <div class={`eigenvector-toggle-panel ${className || ''}`}>
      <input type="checkbox" id={checkboxID} class="eigenvector-toggle-panel__checkbox" role="button" aria-labelledby={labelID} aria-expanded="false" />
      <label id={labelID} class="eigenvector-toggle-panel__label" for={checkboxID}>
        {label}
      </label>
      <div class={`eigenvector-toggle-panel__panel${ltr ? '--ltr' : ''}`}>{children}</div>
    </div>
  );
}