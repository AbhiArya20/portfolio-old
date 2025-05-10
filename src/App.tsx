import '@/App.css'
import useLoading from '@hooks/use-loading'
import Loading from '@components/loading/loading'
import Home from '@pages/home/home'
import useDarkMode from '@hooks/use-dark-mode';
import { Toaster } from 'react-hot-toast';

function App() {
  const loading = useLoading();
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      )}
      <Toaster />
    </>
  )
}

export default App
