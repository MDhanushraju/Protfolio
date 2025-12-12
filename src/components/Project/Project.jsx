import "./Project.css";
import recipeImg from '../assets/recipe.png';
import Portfolio from '../assets/portfolio.png';
import weather from "../assets/weather.png";

export default function Project() {
  const projects = [
    {
      title: "Recipe Finder",
      img: recipeImg,
      alt: "Screenshot of Recipe Finder app",
      url: "https://mdhanushraju.github.io/Project-Food-recipe/"
    },
    {
      title: "Portfolio",
      img: Portfolio,
      alt: "Screenshot of portfolio project",
      url: " https://MDhanushraju.github.io/Protfolio/"
    },
    {
      title: "Weather-checker",
      img: weather,
      alt: "Screenshot of weather checker app",
      url: "https://weather-location-six.vercel.app/"
    }
  ];

  return (
    <>
      <h1 className='text-center'>Projects</h1>
      <div className="projects" id='project'>
        <div className="po">
          {projects.map(({ title, img, alt, url }, index) => (
            <div className="po-container" key={index}>
              <div className="card-1" aria-label={`${title} project card`}>
                <div className="card-title bg-dark-subtle text-center">
                  <h3>{title}</h3>
                </div>
                <div className="card-body body-1">
                  <img src={img} alt={alt} className='img' />
                </div>
                <div className="card-footer foot-1 ">
                  <a
                    href={url}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='btn btn-success'
                    style={{ textDecoration: 'none', color: 'white' }}
                    aria-label={`View ${title} project`}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
