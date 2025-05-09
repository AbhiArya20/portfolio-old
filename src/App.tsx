import '@/App.css'
import usePreLoading from '@hooks/use-pre-loading'
import Loading from '@components/loading/loading'
import Home from '@pages/home/home'
import useDarkMode from '@hooks/use-dark-mode';
import { Toaster } from 'react-hot-toast';

function App() {
  const loading = usePreLoading();
  useDarkMode();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Home />
      )}
      <Toaster />
    </>
  )
}

export default App
