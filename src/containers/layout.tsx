import React, { useEffect } from 'react';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';

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
      <Footer></Footer>
    </div>
  );
}
export default Layout;