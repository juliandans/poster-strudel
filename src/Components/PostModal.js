import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";


export default function PostModal(props) {
  const { isOpen, onClose } = useDisclosure()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{props.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image src={props.image} />
      </ModalBody>
    </ModalContent>
  </Modal>
  );
}