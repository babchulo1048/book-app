import { useGlobalContext } from "../context";
import coverImg from "../images/cover_not_found.jpg";
import "../styles/book.css";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const Book = () => {
  const { books, loading, AddFavorites, removeFavorites, favorites } =
    useGlobalContext();

  const FavoriteChecker = (id) => {
    console.log("favorites" + favorites);
    const boolean = favorites.some((book) => book.key === id);

    console.log("boolean" + boolean);
    return boolean;
  };

  // console.log("id:", id);
  // console.log("FavoriteChecker(id):", FavoriteChecker(id));

  const booksWithCovers = books.map((singleBook) => {
    console.log("singleBook" + singleBook);
    return {
      ...singleBook,
      // removing /works/ to get only id
      key: singleBook.key.replace("/works/", ""),
      cover_img: singleBook.cover_i
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_i}-L.jpg`
        : coverImg,
    };
  });

  if (loading) {
    return (
      <section className="section">
        <h1 className="text-center">Loading...</h1>
      </section>
    );
  }

  if (books.length < 1) {
    return (
      <section className="section">
        <h4>No Books matched your search term. Please try again.</h4>
      </section>
    );
  }

  return (
    <div className="book-container">
      <h1 className="text-center fw-9">BOOKS AVAILABLE</h1>
      <section className="section-center ">
        {booksWithCovers.slice(0, 20).map((singleBook) => {
          const {
            key: id,
            author_name: author,
            // cover_i,
            cover_img,
            //   edition_count,
            //   first_publish_year,
            title,
          } = singleBook;

          return (
            <article key={id} className="single-meal">
              <Link to={`/book/${id}`}>
                <img
                  src={cover_img}
                  className="img"
                  // onClick={() => navigate()}
                />
              </Link>
              <footer>
                <h3>{title}</h3>
                <h5>{author}</h5>
                {FavoriteChecker(id) ? (
                  <button
                    className="like-btn"
                    onClick={() => removeFavorites(id)}
                  >
                    <BsHandThumbsDown />
                  </button>
                ) : (
                  <button
                    className="like-btn"
                    onClick={() => AddFavorites(singleBook)}
                  >
                    <BsHandThumbsUp />
                  </button>
                )}
              </footer>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default Book;
