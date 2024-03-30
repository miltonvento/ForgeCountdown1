import './App.css'

function App() {

  return (
    <>
       <h1> Hi. My name is Milton Vento</h1>
      <div>
        <img className='img' src="src/assets/front-facing top part.JPEG" alt="Milton Vento portrait picture"/>
        <div className="details-container">
              
          <h2> Personal Details</h2>
          <ul>
                  <li > <strong className="label">School:</strong> Williams College</li>
                  <li > <strong className="label"> Class Year:</strong> 2026</li>
                  <li > <strong className="label">Hometown:</strong> Harare, Zimbabwe</li>
                  <li > <strong className="label">Hobbies:</strong> Reading, Watching Sci-Fi, Programming</li>
              </ul>
        </div>
    </div>
    </>
  )
}

export default App
