import React, { useEffect } from 'react';
import Banner from '../components/banner/banner';

//#region style

function Layout(props: any) {
  return (
    <div>
      <Banner></Banner>
      <main>
        <React.Fragment>
          {props.children}
        </React.Fragment>
      </main>
    </div>
  );
}
export default Layout;