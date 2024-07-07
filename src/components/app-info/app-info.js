import './app-info.css'
const AppInfo = ({increasedCount, allMoviesCount}) => {
  return (
    <div className="app-info">
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>Ko'rilgan kinolar soni: { increasedCount}</p>
    </div>
    
  )
}

export default AppInfo