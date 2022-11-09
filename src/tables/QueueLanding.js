import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const center = {
  textAlign: "center",
};

export function QueueLanding() {
  // table with table limit and pagination button
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPost] = useState(1);
  const postPerPage = 5;
  let pages = [];

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserData(res.data);
      console.table(res.data);
    });
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = userData.slice(firstPostIndex, lastPostIndex);

  for (let i = 1; i <= Math.ceil(userData.length / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <Table striped bordered hover style={center}>
        <thead>
          <tr>
            <th>Queue Line Number</th>
          </tr>
        </thead>
        <tbody>
          {currentPost.map((queue, index) => (
            <tr key={index}>
              <td>{queue.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page, index) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={index}
            >
              <p className="page-link" onClick={() => setCurrentPost(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
