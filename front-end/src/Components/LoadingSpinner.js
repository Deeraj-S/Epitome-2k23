import React from "react"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-overlay">

            <ClimbingBoxLoader color={'#36d7b7'} loading={true} size={12} aria-label="Loading Spinner"
                data-testid="loader" />

        </div>
    )
}

export default LoadingSpinner