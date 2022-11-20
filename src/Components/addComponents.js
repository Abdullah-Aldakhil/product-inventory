import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from "react";

export default function AddProduct() {
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);
  const fromData = createRef();

  const add = (event) => {
    event.preventDefault();
    const newProduct = {
      product_name: fromData.current.product_name.value,
      price: fromData.current.price.value,
      qty: Number(fromData.current.qty.value),
    };

    setProduct([...products, newProduct]);
  };

  const PlusQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty + 1;
    setProduct([...products]);
  };
  const MinusQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].qty = products[indexOfArray].qty - 1;
    setProduct([...products]);
  };
  function Edit(index) {}

  return (
    <div>
      <Form onSubmit={add} ref={fromData}>
        <Form.Group className="mb-3" controlId="formBasicProductName">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            name="product_name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" placeholder="Price" name="price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control type="number" placeholder="How many: qty" name="qty" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add to Inventory
        </Button>
      </Form>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Option</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={(event) => PlusQty(event)}
                    value={index}
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(event) => MinusQty(event)}
                    value={index}
                  >
                    -
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setProduct(
                        products.filter((a) => a.index !== products.index)
                      );
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
