import './App.css'

function App() {
  const section = [
    {
      Image:" https://img.freepik.com/free-photo/beautiful-coastal-landscape_23-2151757403.jpg?uid=R140885927&ga=GA1.1.544832653.1721967090&semt=ais_hybrid",
      description: "lorem ipsum dolor sit amet consectetur. Facilisi auctor pellentesque convallis proin tortor eu tortor dolor. Diam tellus lorem eu pharetra.",
      button: "View Item"
    },
    {
      Image:" https://img.freepik.com/free-photo/beautiful-coastal-landscape_23-2151757403.jpg?uid=R140885927&ga=GA1.1.544832653.1721967090&semt=ais_hybrid",
      description: "lorem ipsum dolor sit amet consectetur. Facilisi auctor pellentesque convallis proin tortor eu tortor dolor. Diam tellus lorem eu pharetra.",
      button: "View Item"
    },
    {
      Image:" https://img.freepik.com/free-photo/beautiful-coastal-landscape_23-2151757403.jpg?uid=R140885927&ga=GA1.1.544832653.1721967090&semt=ais_hybrid",
      description: "lorem ipsum dolor sit amet consectetur. Facilisi auctor pellentesque convallis proin tortor eu tortor dolor. Diam tellus lorem eu pharetra.",
      button: "View Item"
    }

  ]

  return (
    <>
    <div className="container">
      <h1>hello</h1>
      <p>lorem ipsum dolor sit amet consectetur. Facilisi auctor pellentesque convallis proin tortor eu tortor dolor. Diam tellus lorem eu pharetra.</p>
        <div className="groups">
          {section.map ((item, index)=>{
            return(
              <div className="card">
                <img src={item.Image} alt="Background Image" />
                <div className="card-content">
                  <h3>Adventure Awaits</h3>
                  <p>{item.description}</p>
                  <button>{item.button}</button>
                </div>
              </div>
            )
          })}
        </div>
    </div>

    </>
  )
}

export default App
