import Table from "react-bootstrap/Table";

const center = {
  textAlign: "center",
};

export function NowServing() {
  return (
    <Table striped bordered hover style={center}>
      <thead>
        <tr>
          <th>Queue Line Number</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  );
}
