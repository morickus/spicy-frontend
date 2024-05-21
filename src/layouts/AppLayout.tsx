import React, { FC, PropsWithChildren } from 'react';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div id="app-layout">{children}</div>;
};

export default AppLayout;