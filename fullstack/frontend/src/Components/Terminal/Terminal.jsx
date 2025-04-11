import { useEffect, useRef,useState } from 'react';
import Typed from 'typed.js';
import useActive from '../../Hooks/useActive';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const commands = [
    'Accessing restricted files..',
    '500 Internal Error',
    "These are not the error codes you're looking for.",
    'Please either report this error to an administrator or return back and forget you were here...'
  ];
  const promptRef = useRef(null);
  const { path } = useActive();

  useEffect(() => {
    const typed = new Typed(promptRef.current, {
      strings: commands,
      typeSpeed: 30,
      backSpeed: 0,
      smartBackspace: false,
      loop: false
      // onStringTyped: (arrayPos) => {
      //   console.log(arrayPos);
      //   setHistory((prev) => [...prev, commands[arrayPos]]);
      // },
      // onComplete: () => {
      //   const newHistory = [...history];
      //   newHistory.push('<span class="gray">Please either report this error to an administrator or return back and forget you were here...</span>');
      //   setHistory(newHistory);
      // }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='terminal-window mx-auto mt-40 w-[37.5rem] h-[22.5rem] rounded-lg'>
      <header className='flex items-center bg-[#E0E8F0] h-[1.875rem] rounded-t-lg px-2'>
        <div className='button green bg-[#3BB662] rounded-full w-[0.75rem] h-[0.75rem] mr-1'></div>
        <div className='button yellow bg-[#E5C30F] rounded-full w-[0.75rem] h-[0.75rem] mr-1'></div>
        <div className='button red bg-[#E75448] rounded-full w-[0.75rem] h-[0.75rem]'></div>
      </header>
      <section className='terminal text-white font-mono text-[11pt] bg-[#30353A] p-2.5 rounded-b-lg overflow-auto h-[calc(100%-1.875rem)]'>
        <p className='flex'>
          <span className='text-green-600'>portfolio@abhishek:</span>
          <span className='text-blue-600'>~{path}$&nbsp; </span>
          <span className='text-gray-500'> npm install</span>
        </p>
        <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: history.join('\n') }}></div>
        <div>
          <span className='prompt' ref={promptRef}></span>
        </div>
      </section>
    </div>
  );
};
