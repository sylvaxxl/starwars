import React, { useState } from 'react';


const Movie = ({ id, title, content, created, removeItem }) => {
    const [readmore, setReadmore] = useState(false);

    return (
        <div className="tour_single" id={id}>

            <h2>{title}</h2>
            <p>{readmore ? content : `${content.substring(0, 150)}...`}

                <button className="readmore_btn" onClick={() => setReadmore(!readmore)}> {readmore ? 'showless' : 'readmore'}</button></p>

            <div className="footer">
                <p>{created}</p>

                <button className="delete_btn" onClick={() => removeItem(id)}>Delete</button>
            </div>

        </div>

    );
}

export default Movie;