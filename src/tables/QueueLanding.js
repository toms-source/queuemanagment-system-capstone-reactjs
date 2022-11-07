import Table from "react-bootstrap/Table";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const center = {
  textAlign: "center",
};

var _ = require("lodash");

const pageSize = 3;

export function QueueLanding() {
  const [queue, setQueue] = useState([]);
  const [paginated, setPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.table(res.data);
      setQueue(res.data);
      // setPaginated(_(res.data).slice(0).take(pageSize).value());
    });
  });

  const queueCount = queue ? Math.ceil(queue.length / pageSize) : 0;
  if (queueCount === 1) return null;
  const pages = _.range(1, queueCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const starting = (pageNo - 1) * pageSize;
    const paginate = _(queue).slice(starting).take(pageSize).value();
    setPaginated(paginate);
  };
  return (
    <Fragment>
      <Table striped bordered hover style={center}>
        <thead>
          <tr>
            <th>Queue Line Number</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((queue, index) => (
            <tr key={index}>
              <td>{queue.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
}
