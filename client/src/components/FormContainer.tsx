import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  return (
    <div className='container mx-auto p-2'>
      <div className='my-8 rounded-xl bg-cover' style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}>
      <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
        <h2 className='text-white text-4xl text-center pb-4'>URL Shortner</h2>
        <p className='text-white text-center pb-2 text-xl font-extrabold'>Paste your untidy link to shorten it</p>
        <p className='text-white text-center pb-4 text-sm font-thin'>Free tool to shorten you url and you can use it too for shorten any url</p>
        </div>
      </div>
    </div>
  )
};

export default FormContainer;
