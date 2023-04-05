// import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export const ToastMessage = ({ show, onClose }) => {
  // const tostShowButton = () => setShowToast(!showToast);
  return (
    <ToastContainer position="top-center">
      <Toast show={show} onClose={onClose} delay={3000} autohide>
        <Toast.Header></Toast.Header>
        <Toast.Body>Prekė sėkmingai pridėta į krepšelį!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
