import PageMain from '../../pages/page-main/page-main';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <PageMain
      offersCount={offersCount}
    />
  );
}

export default App;
