
import "./Project.css"
import recipeImg from '../assets/recipe.png'
import Portfolio from '../assets/portfolio.png'
import weather from "../assets/weather.png"
export default function Project() {
  return (
    <>
  <h1 className='text-center'>Projects</h1>
      <div className="projects" id='project'>
        <div className="po">
          <div className="po-container">
            <div className="card-1">
              <div className="card-title bg-dark-subtle text-center">
                <h3>Recipe Finder</h3>
              </div>
              <div className="card-body body-1">
                <img src={recipeImg} alt="" className='img' />
              </div>
              <div className="card-footer foot-1 ">
                <button className='btn btn-success'>
                  <a href="https://mdhanushraju.github.io/Project-Food-recipe/" target='_blank' className='a-1' style={{textDecoration:"none",color:"white"}}>view</a>
                </button>
              </div>
            </div>
          </div>
         <div className="po-container">
            <div className="card-1">
              <div className="card-title bg-dark-subtle text-center">
                <h3>Portfolio</h3>
              </div>
              <div className="card-body body-1">
                <img src={Portfolio} alt="Portfolio screenshot" className='img' />
              </div>
              <div className="card-footer foot-1 ">
                <button className='btn btn-success'>
                  <a href="https://mdhanushraju.github.io/Portfolio/" target='_blank' className='a-1' style={{textDecoration:"none",color:"white"}}>view</a>
                </button>
              </div>
            </div>
          </div>
          <div className="po-container">
            <div className="card-1">
              <div className="card-title bg-dark-subtle text-center">
                <h3>Weather-checker</h3>
              </div>
              <div className="card-body body-1">
                <img src={weather} alt="Weather app screenshot" className='img' />
              </div>
              <div className="card-footer foot-1 ">
                <button className='btn btn-success'>
                  <a href="https://weather-location-six.vercel.app/" target='_blank' className='a-1' style={{textDecoration:"none",color:"white"}}>view</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
