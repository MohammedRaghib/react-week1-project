import React from 'react';

function Main({ book }) {
    return (
        <div className="book-card">
            <img src={book.img} alt={book.title} height={276}/>
            <div className="book-card-content">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-description">{book.description}</p>
            </div>
        </div>
    );
}

export default Main;
