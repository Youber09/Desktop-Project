import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { enable, isEnabled } from '@tauri-apps/plugin-autostart';


(async () => {
  const active = await isEnabled();
  if (!active) await enable();
})();

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
