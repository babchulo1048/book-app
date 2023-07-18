import { useGlobalContext } from "../context";
import "../styles/favorites.css";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import "../styles/favorites.css";

const Favorites = () => {
  const { favorites, removeFavorites, AddFavorites } = useGlobalContext();

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.key === id);
    return boolean;
  };

  return (
    <div className="favorites-container">
      <h1 className="text-center fw-9">BOOKS FAVORITES</h1>

      <section className="section-center2">
        {favorites.length > 0 ? (
          favorites.map((singleBook) => {
            const {
              key: id,
              author_name: author,
              cover_img,
              edition_count,
              //   first_publish_year,
              title,
            } = singleBook;
            return (
              <article key={id} className="single-book2">
                <img src={cover_img} className="img " />
                <footer className="book-info2">
                  <h3>{title}</h3>
                  <h5>{author}</h5>
                  <h5>{edition_count}</h5>

                  {favoriteChecker(id) ? (
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
          })
        ) : (
          <div>
            <h3>No Favorites Found</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;

// import { useGlobalContext } from "../context";
// import "../styles/favorites.css";

// const Favorites = () => {
//   const { favorites, removeFavorites } = useGlobalContext();

//   return (
//     <section className="favorites-container">
//       {favorites.map((book) => {
//         const { image_url: img, title, id, authors, genres } = book;
//         return (
//           <article className="favorites-article">
//             <img src={img} className="img" alt="favorite image" />
//             <div>
//               <h3>{title}</h3>
//               <h4>{authors}</h4>
//               <h5>{genres}</h5>
//               <button onClick={() => removeFavorites(id)}>remove</button>
//             </div>
//           </article>
//         );
//       })}
//     </section>
//   );
// };

// export default Favorites;
