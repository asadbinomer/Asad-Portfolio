import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageNotFound from '../../assets/404.svg';
import UButton from '../uButton/UButton';

function PageNotFound() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-[100vh] flex flex-col gap-14 items-center text-center justify-center">
      <img src={imageNotFound} alt="404 Not Found" className="mt-[-100px] max-w-[500px] max-h-[420px]" />
      <div className="flex flex-col gap-10">
        <h1 className="text-[48px] font-semibold">Page not found...</h1>
        <p className="text-[18px] font-medium text-[#9AA1A6]">
          Something went wrong. The requested page could not be found.<br />
          It looks like the link is broken or the page has been removed.
        </p>
        <UButton 
          primary={true} 
          onClick={handleHomeClick} 
          value="Go to Home" 
          className="mx-auto" 
          icon={<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 16.2753V11.7753C10.75 11.5764 10.671 11.3857 10.5303 11.245C10.3897 11.1044 10.1989 11.0253 10 11.0253H7C6.80109 11.0253 6.61032 11.1044 6.46967 11.245C6.32902 11.3857 6.25 11.5764 6.25 11.7753V16.2753C6.25 16.4743 6.17098 16.665 6.03033 16.8057C5.88968 16.9463 5.69891 17.0253 5.5 17.0253H1C0.801088 17.0253 0.610322 16.9463 0.46967 16.8057C0.329018 16.665 0.25 16.4743 0.25 16.2753V7.60347C0.251679 7.49968 0.27411 7.39727 0.315972 7.30227C0.357833 7.20728 0.418279 7.12162 0.49375 7.05035L7.99375 0.234723C8.13201 0.108235 8.31261 0.0380859 8.5 0.0380859C8.68739 0.0380859 8.86799 0.108235 9.00625 0.234723L16.5062 7.05035C16.5817 7.12162 16.6422 7.20728 16.684 7.30227C16.7259 7.39727 16.7483 7.49968 16.75 7.60347V16.2753C16.75 16.4743 16.671 16.665 16.5303 16.8057C16.3897 16.9463 16.1989 17.0253 16 17.0253H11.5C11.3011 17.0253 11.1103 16.9463 10.9697 16.8057C10.829 16.665 10.75 16.4743 10.75 16.2753Z" fill="white"/></svg>}
        />
      </div>
    </div>
  );
}

export default PageNotFound;
