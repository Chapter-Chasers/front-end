import Book from '../Book';
import './BookList.css'
function BookList(props) {
    const bookArray = props?.data?.items;

    return (
        <div className="book-list-container">
            {bookArray?.map((obj, i) => {
                return <div className="book-item-wrapper">
                    < Book book={obj} key={i} />
                </div>
            })
            }
        </div>
    )
}

export default BookList;