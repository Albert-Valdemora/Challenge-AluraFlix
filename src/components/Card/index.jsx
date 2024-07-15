import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Tooltip,
} from "@nextui-org/react";
import CardEditar from "./CardEditar";
import CardEditarInfo from "./CardEditarInfo"; // Importa el componente
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { peticiones, Delete } from "../../peticiones/peticion";

const CardA = ({ categoria }) => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalEditarInfoOpen, setModalEditarInfoOpen] = useState(false); // Estado para CardEditarInfo

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3001/${categoria.replace(/ /g, '%20')}`;
      const result = await peticiones(url);
      setData(result);
    };

    fetchData();
  }, [categoria]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const openModal2 = (item) => {
    setSelectedItem(item);
    setModalOpen2(true);
  };

  const openModalEditarInfo = () => {
    setModalEditarInfoOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const closeModalEditarInfo = () => {
    setModalEditarInfoOpen(false);
  };

  const handleDelete = async (id) => {
    await Delete(id, `http://localhost:3001/${categoria.replace(/ /g, '%20')}`);
    setData(data.filter(item => item.id !== id));
  };

  const filteredList = data || [];

  return (
    <div className="gap-2 grid grid-cols-2 mt-8 sm:grid-cols-5">
      {filteredList.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          border
          isPressable
          className="border-none"
          onPress={() => openModal(item)}
        > 
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.titulo}
              className="w-full object-cover h-[140px]"
              src={item.imagen}
            />
          </CardBody>
          <CardFooter className="text-small justify-between ">
            <b>{item.titulo}</b>
            <div className="flex">
              <Tooltip color="default" content="Ver contenido">
                <Button size="sm" className="bg-transparent" onPress={() => openModal(item)}>
                  <FaEye className="text-lg"/>
                </Button>
              </Tooltip>
    
              <Tooltip color="default" content="Borrar card">
                <Button size="sm" className="bg-transparent" onPress={() => handleDelete(item.id)}>
                  <MdDelete className="text-lg"/>
                </Button>
              </Tooltip>


              <Tooltip color="default" content="Editar información">
                <Button size="sm" className="bg-transparent" onPress={openModalEditarInfo}>
                  <BsPencilSquare className="text-lg"/>
                </Button>
              </Tooltip>
            </div>
          </CardFooter>
        </Card>
      ))}
      <CardEditar
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedItem}
      />
      <CardEditarInfo
        isOpen={isModalEditarInfoOpen}
        onClose={closeModalEditarInfo}
      />
    </div>
  );
};

export default CardA;
