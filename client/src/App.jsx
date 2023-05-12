import React from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { HomePage, PostPage } from './pages';
const App = () => {
  return (
    <BrowserRouter>
      <header className=' w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img className='w-28 object-contain' src={logo} alt='logo' />
        </Link>
        <Link
          to='/create-post'
          className='font-inter font-medium bg-[#6469ff] text-white px-4  py-2 rounded-md'
        >
          Create
        </Link>
      </header>
      <main className=' min-h-[calc(100vh-73px)] sm:p-8 px-4 py-8 w-full bg-[#f9fafe] '>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-post' element={<PostPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
