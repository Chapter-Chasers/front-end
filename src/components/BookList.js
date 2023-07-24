import Book from './Book';
import './BookListStyle.css'
function BookList(props) {
    const bookArray = props?.data?.items;

    return (
        <div className='Book-list'>
            {bookArray?.map((obj, i) => (
                <Book book={obj} key={i}/>
            ))
            }
        </div>
    )
}

export default BookList;