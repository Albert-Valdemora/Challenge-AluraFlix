import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { peticiones } from '../../../peticiones/peticion';

const CardEditarInfo = ({ isOpen, onClose }) => {


  return (
      <>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onClose}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Editar Card</ModalHeader>
            <ModalBody>
              <p> 
              Actualmente, la función no está funcionando.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CardEditarInfo;
