function LoadingStatus ({theme}) {
    return <div className="loading-container">
        <h2>Generating your {theme} story </h2>
        <div className="loading-animation"></div>
        <div className="spinner"></div>

         <p className="loading info">
            pls wait as story generates
            </p>
        </div>
}
export default LoadingStatus;