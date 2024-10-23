import React from 'react';

function Main({ book }) {  // Destructure book from props
    return (
        <div className="book-card">
            <img src={book.img} alt={book.title} />
            <div className="book-card-content">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-description">{book.description}</p>
            </div>
        </div>
    );
}

export default Main;
