import ClayPanel from '@clayui/panel'
import React from 'react'

export default function PanelWidget(props) {
  return (
    <ClayPanel.Group>
        <ClayPanel displayTitle={props.title} displayType="unstyled">
        </ClayPanel>
    </ClayPanel.Group>
  )
}
