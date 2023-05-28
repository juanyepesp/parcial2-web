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
                        <th>
                            <form>
                                <input placeholder={selectedBook.isbn} type='text'/>
                            </form>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.author"></FormattedMessage>
                        </th>
                        <th>
                            <form>
                                <input placeholder={selectedBook.author} type='text'/>
                            </form>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.publisher"></FormattedMessage>
                        </th>
                        <th>
                            <form>
                                <input placeholder={selectedBook.publisher} type='text'/>
                            </form>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.genre"></FormattedMessage>
                        </th>
                        <th>
                            <form>
                                <input placeholder={selectedBook.gender} type='text'/>
                            </form>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.year"></FormattedMessage>
                        </th>
                        <th>
                            <form>
                                <input placeholder={selectedBook.year} type='text'/>
                            </form>
                        </th>

                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.availableOnline"></FormattedMessage>
                        </th>
                        <input  type='checkbox'/>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.price"></FormattedMessage>
                        </th>
                        <th>
                            <form>
                                <input placeholder={selectedBook.price} type='text'/>
                            </form>
                        </th>

                        
                    </tr>
                    <tr>
                        <th scope="row">
                            <FormattedMessage id="book.summary"></FormattedMessage>
                        </th>
                        <th>
                            <form>
                                <input placeholder={selectedBook.summary} type='text'/>
                            </form>
                        </th>

                        
                    </tr>
                </tbody>
            </table>
        </div>
        );
}

export default BookDetail;

