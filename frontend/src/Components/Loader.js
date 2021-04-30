import React from 'react'
import {Spinner} from 'react-bootstrap'
function Loader() {
    return (
        <Spinner animation="border" role='status' style={{width:'200px',height:'200px'}} >
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default Loader
