import Book from './Book';
function BookList(props) {
    const bookArray = props?.data?.items;

    return (
        <div>
            {bookArray?.map((obj, i) => (
                <Book book={obj} key={i}/>
            ))
            }
        </div>
    )
}

export default BookList;