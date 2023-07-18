// import { useGlobalContext } from "../context";
// import coverImg from "../images/cover_not_found.jpg";
// // import Loader from "./Loader";
// import Book from "./Book";
// import "../styles/bookList.css";

// // https://covers.openlibrary.org/b/id/240727-S.jpg
// const BookList = () => {
//   const { books, resultTitle, loading } = useGlobalContext();
//   const booksWithCovers = books.map((singleBook) => {
//     console.log("singleBook" + singleBook);
//     return {
//       ...singleBook,
//       // removing /works/ to get only id
//       id: singleBook.id.replace("/works/", ""),
//       cover_img: singleBook.cover_id
//         ? `https://covers.openlibrary.org/b/id/${singleBook.cover_i}-L.jpg`
//         : coverImg,
//     };
//   });

//   // if (loading) return <Loader />;

//   return (
//     <section className="booklist">
//       <div className="container">
//         <div className="section-title">
//           <h2>{resultTitle}</h2>
//         </div>
//         <div className="booklist-content grid">
//           {booksWithCovers.slice(0, 30).map((item, index) => {
//             console.log("cover" + item);
//             return <Book key={index} {...item} />;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookList;
