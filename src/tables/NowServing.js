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
      <tbody>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
        </tr>
      </tbody>
    </Table>
  );
}
