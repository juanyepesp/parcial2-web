import React, {useEffect} from "react";
import { getBooks} from "../../shared/helpers";
import { FormattedMessage } from "react-intl";
import BookDetail from "../../components/Book/BookDetail";
import AdminBookDetail from "../../components/Book/AdminBookDetail";
import { Card } from "react-bootstrap";
import "./Home.css";

function Home(props) {
    const isAdmin = props.isAdmin;
    const [books, setBooks] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [selectedBook, setSelectedBook] = React.useState();
    useEffect(() => {
        getBooks().then(data => setBooks(data));
    }, []);
    
    function handleBookClick(id) {
        setSelectedBook(id);
        setClicked(true);
    }

    const renderDetail = () =>{ 
        if (isAdmin) {
            return (
                <div className="col-sm">
                    <AdminBookDetail id={selectedBook}/>
                </div>
            );
        }
        else {
            return (
                <div className="col-sm">
                    <BookDetail id={selectedBook}/>
                </div>
            );
        }
    }
    
    return (
        <div className="container" id='container-home'>
            <div className="row">
                <div className="col-sm">
                    <div className="card-group">
                        {
                            books.map(book => (
                            <div className="col-sm" key={books.id}>
                                <Card onClick={() => handleBookClick(book.id)} style={{ width: '12rem', height: '18rem' }} border="dark" >
                                    <Card.Body>
                                        <Card.Img variant="top" src={book.image} />
                                        <Card.Title>{book.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                <FormattedMessage id="book.isbn"></FormattedMessage> 
                                                {book.isbn}
                                            </Card.Subtitle>
                                        <Card.Text>
                                            {book.summary}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                {clicked && renderDetail()}
            </div>
        </div>
    );

}

export default Home;