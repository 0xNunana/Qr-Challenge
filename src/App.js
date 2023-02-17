
import './App.css';

function App() {
  return (
    <div className='bg-slate-200/80 py-5 flex justify-center'>
      <div  className='border my-10 rounded-xl bg-white h-[50%s]'>
        <div className='p-4'>
          <img className="rounded-xl"src="image-qr-code.png" width={300}/>
        </div>
        <div className='text-center pb-8' >
         <p className='text-2xl font-semibold'>Improve your front-end<br/>skills by building projects</p>
         <p className='text-gray-400 pt-2'>Scan the QR code to visit Frontend<br/>Mentor and take your coding skills to<br/>the next level</p>
         </div>

      </div>
  
    </div>
  );
}

export default App;
