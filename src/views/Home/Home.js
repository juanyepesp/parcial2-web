import React from "react";
import { Card } from "react-bootstrap";

function Home() {

    const [books, setBooks] = React.useState([]);
    const [selectedBook, setSelectedBook] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    React.useEffect(() => {
        if (selectedBook) {
            fetch(`http://localhost:3000/books/${selectedBook.id}`)
                .then(response => response.json())
                .then(data => setSelectedBook(data));
        }
    }, [selectedBook]);

    function handleBookClick(book) {
        setSelectedBook(book);
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1>Books</h1>
                    <div className="row">
                        {books.map(book => (
                            <div className="col-sm" key={book.id}>
                                <Card style={{ width: '18rem' }} onClick={() => handleBookClick(book)}>
                                    <Card.Body>
                                        <Card.Title>{book.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                                        <Card.Text>
                                            {book.summary}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-sm">
                    <h1>Book Detail</h1>
                    {selectedBook && (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{selectedBook.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{selectedBook.author}</Card.Subtitle>
                                <Card.Text>
                                    {selectedBook.summary}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Home;