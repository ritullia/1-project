// import { cardData } from "./data/data";
import { ProductItemCard } from "./ProductItemCard";
import { Container } from "./styles/style";
import { useState } from "react";
import { ToastMessage } from "./ToastMessage";
import { Modal, Button } from "react-bootstrap";
import "./styles/styles.css";
import { useEffect } from "react";
import { Header } from "./Header";

export const ItemList = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [addedToCart, setaddedToCart] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [productFilter, setProductFilter] = useState(" ");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleAddToCart = () => {
    console.log(`Įdėta į krepšelį`);
    setaddedToCart(activeItem);
    setActiveItem(null);
    // setaddToCardSucc(true);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  const handleProductOnChange = (e) => {
    setProductFilter(e.target.value);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products);
        setProducts(data.products);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header></Header>
      <div>
        <div>
          <input onBlur={handleProductOnChange} />
        </div>
        <Container className="item-container">
          {products
            ?.filter((item) => item.title.toLowerCase().includes(productFilter))
            .map((item) => {
              return (
                <ProductItemCard
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                />
              );
            })}
        </Container>
        <ToastMessage
          show={!!addedToCart}
          onClose={() => setaddedToCart(false)}
          body={` ${addedToCart?.title} `}
        />
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
      </div>
    </>
  );
};
