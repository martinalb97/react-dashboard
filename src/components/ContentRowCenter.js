import React from 'react';
import LastProductInDB from './LastProductInDB';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <React.Fragment>
        <div className="row">
            <LastProductInDB />
            <GenresInDb />
        </div>
        </React.Fragment>
    )
}

export default ContentRowCenter;