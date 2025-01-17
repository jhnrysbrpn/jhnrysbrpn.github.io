import './App.css'
import Avatar1 from '../Images/Avatar1.png'
import Avatar from '../Images/Avatar.png'


function App() {

  return (
    <>
      <p className='mt-[5rem]'> IT`S JUST ME </p>

      <div>
        <video src=""></video>
      </div>

<button
  aria-label="Start Game"
  className="px-8 py-2 font-bold text-lg rounded-full shadow-lg transition-transform transform  border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none"
  id="startButton"
> Want To Know More About Me?
 
</button>

      <img className=' bg-transparent' src={Avatar1} alt="" />
      <img className=' bg-transparent' src={Avatar} alt="" />

    </>
  )
}

export default App
