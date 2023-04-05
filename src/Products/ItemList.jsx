import { cardData } from "./data/data";
import { ProductItemCard } from "./ProductItemCard";
import { Container } from "./styles/style";
import { useState } from "react";
import { ToastMessage } from "./ToastMessage";
import { Modal, Button } from "react-bootstrap";

export const ItemList = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [addToCardSucc, setaddToCardSucc] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleAddToCart = () => {
    console.log(`Įdėta į krepšelį`);
    setActiveItem(null);
    setaddToCardSucc(true);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  const cardArr = cardData.map((item) => {
    console.log(item);
    return (
      <ProductItemCard key={item.id} item={item} onClick={handleItemClick} />
    );
  });

  return (
    <>
      <Container>{cardArr}</Container>
      <Modal
        show={!!activeItem}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{activeItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activeItem?.description}. Stock: {activeItem?.stock}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastMessage
        show={addToCardSucc}
        onClose={() => setaddToCardSucc(false)}
      />
    </>
  );
};
