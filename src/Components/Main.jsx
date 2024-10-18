import React from 'react'
import './card.css';
import Hobbit from './hobbit.jpg';
import Percy from'./percy_jackson.jpg';

function Main() {
    const books = [
        {
            img: Percy,
            title: 'Percy Jackson - The last olympian',
            description: `A brave young boy setting out to destroy the now awakened Lord of the titans: Kronos.`
        },
        {
            img: Hobbit,
            title: 'The Hobbit',
            description: `A book about hobbit`
        }
    ];
    return (
        <>
            <div className='cards'>
                {books.map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.img} alt={book.title}/>
                        <div className="book-card-content">
                            <h2 className="book-title">{book.title}</h2>
                            <p className="book-description">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Main
