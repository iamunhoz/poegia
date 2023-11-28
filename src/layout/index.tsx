import { Outlet } from 'react-router-dom';
// import { useAtomValue } from 'jotai';
// import { borderAtom, themeAtom } from 'src/state';
import Footer from './Footer';
import Header from './Header';

export default function Layout(): JSX.Element {
  // const theme = useAtomValue(themeAtom);
  // const border = useAtomValue(borderAtom);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
