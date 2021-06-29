import React from 'react';

function LoadingBox() {
    return (
        <div >
            <div style={{display:'flex', flexDirection: 'column' ,justifyContent: 'center', marginTop: 20, marginBottom: 20}}>
            <i className="fa fa-spinner fa-spin" style={{color:'orange', fontSize: 200, fontWeight: 600}}></i>
            </div>
            <h3 style={{display: 'flex', justifyContent: 'center'}}>Loading...</h3>
        </div>
    )
}

export default LoadingBox
