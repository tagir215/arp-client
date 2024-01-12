import React, { memo } from 'react'

const LoadingScreen = memo(() => {


    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    )
})

export default LoadingScreen