import React from 'react'

export const MovieCard = ({movie:{imbID,Year,Poster,Title,Type}}) => {            //Destructuring
    return (
        <>
            <div className="movie" key={imbID}>
                <div>
                    <p>{Year}</p>
                </div>
                <div>
                    <img src={Poster !== 'N/A' ? Poster : "https://via.placeholder.com"} alt={Title} />
                </div>
                <div>
                    <span>{Type}</span>
                    <h3>{Title}</h3>
                </div>
            </div>
        </>
    )
}
