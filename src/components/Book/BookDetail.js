import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { getBookById } from "../../shared/helpers";
import './BookDetail.css';

function BookDetail(props) {
    const id = props.id;
    const [selectedBook, setSelectedBook] = React.useState([]);

    useEffect(() => {
        getBookById(id).then(data => setSelectedBook(data));
    }, [id]);

    console.log(selectedBook);

    return (
        <div className="col-sm">
            <h1 className="book-title">{selectedBook.name}</h1>
                <hr></hr>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.isbn"></FormattedMessage>
                        </th>
                        <td>{selectedBook.isbn}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.author"></FormattedMessage>
                        </th>
                        <td>{selectedBook.author}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.publisher"></FormattedMessage>
                        </th>
                        <td>{selectedBook.publisher}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.genre"></FormattedMessage>
                        </th>
                        <td>{selectedBook.gender}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.year"></FormattedMessage>
                        </th>
                        <td>{selectedBook.year}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.availableOnline"></FormattedMessage>
                        </th>
                        <td>
                            {selectedBook.available_online && (
                                <FormattedMessage id="book.availableOnlineTrue"></FormattedMessage>
                            )}
                            {!selectedBook.available_online && (
                                <FormattedMessage id="book.availableOnlineFalse"></FormattedMessage>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.price"></FormattedMessage>
                        </th>
                        <td>{selectedBook.price}</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.summary"></FormattedMessage>
                        </th>
                        <td>{selectedBook.summary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
}

export default BookDetail;

