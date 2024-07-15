import React, { useState } from "react";
import Footer from "../Footer";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import styled from "styled-components";
import { animals } from "./data";
import Boton from "../Boton";
import { envio } from "../../peticiones/peticion";



const SectionEstilizada = styled.section`
  max-width: 1900px;
  width: 90%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  background-color: transparent;
`;

const TitulosEstilizado = styled.h2`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  position: relative;
  bottom: 150px;
  left: 5px;
`;

const ParrafoEstilizado = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  position: relative;
  bottom: 120px;
  left: 5px;
`;

const ContenedorTitulo = styled.div`
  display: flex;
  align-self: flex-start;
`;

const TitulosEstilizado2 = styled.h2`
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  position: relative;
  padding: 10px 0 80px 0;

  &::after,
  &::before {
    content: "";
    display: block;
    width: 89vw;
    box-sizing: border-box;
    height: 2px;
    background: #a5a5a5;
    position: absolute;
    left: 0;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: 50px;
  }
`;

const StyledText = styled(Textarea)`
  label {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
    color: #fff !important;
  }

  textarea {
    color: #fff !important;
  }
`;

const StyledInput = styled(Input)`
  label {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
    color: #fff !important;
  }

  input {
    color: #fff !important;
  }
`;

const StyledSelect = styled(Select)`
  label {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
    color: #fff !important;
  }

  span {
    color: #fff !important;
  }
`;

const NuevoVideo = () => {
  const variants = ["underlined"];
  const colors = ["default"];
  
  const [titulo, setTitulo] = useState("");
  const [video, setVideo] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("Back End");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoVideo = {
      titulo,
      video,
      imagen,
      descripcion,
      categoria,
    };
    console.log(nuevoVideo);
    const url = `http://localhost:3001/${categoria.replace(/ /g, "%20")}`;
    await envio(nuevoVideo, url);
    limpiarInput()
  };

  const limpiarInput = () => {
    setTitulo('');
    setVideo('');
    setImagen('');
    setDescripcion('');
    setCategoria('Back End'); // Asegúrate de que la categoría se reinicie correctamente
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <SectionEstilizada>
          <div>
            <TitulosEstilizado>Nuevo Video</TitulosEstilizado>
            <ParrafoEstilizado>
              Complete el formulario para crear una nueva tarjeta de video
            </ParrafoEstilizado>
          </div>
          <ContenedorTitulo>
            <TitulosEstilizado2>Crear Tarjeta</TitulosEstilizado2>
          </ContenedorTitulo>

          <div className="w-full flex flex-col gap-4 mt-10">
            {variants.map((variant) => (
              <div
                key={variant}
                className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 "
              >
                <StyledInput
                  type="text"
                  variant={variant}
                  label="Titulo"
                  placeholder="Ingrese el título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <StyledInput
                  type="text"
                  variant={variant}
                  label="Video"
                  placeholder="Ingrese el enlace del video"
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                />
                <StyledInput
                  type="text"
                  variant={variant}
                  label="Imagen"
                  placeholder="Link de la imagen"
                  value={imagen}
                  onChange={(e) => setImagen(e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap mt-10 mb-6 md:mb-0 gap-4 ">
            <StyledText
              variant="underlined"
              label="Descripción"
              labelPlacement="outside"
              placeholder="¿De qué se trata este vídeo?"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />

            <StyledSelect
              color="default"
              label="Categoría"
              labelPlacement="outside"
              placeholder="Seleccione una categoría"
              selectedKeys={[categoria]}
              onSelectionChange={(selected) => setCategoria(Array.from(selected)[0])}  // Convert Set to Array and get the first element
              className="max-w-xs text-white"
              variant="underlined"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </StyledSelect>
          </div>
          {/* <div className="w-full absolute flex gap-10 bottom-0">
            <Boton titulo="Guardar" B_oscuro={false} T_oscuro={true} />
            <Boton type="button" onClick={limpiarInput} titulo="Limpiar" B_oscuro={false} T_oscuro={false} />
          </div>
           */}
           <div className="w-full absolute flex gap-10 bottom-0">
            <Boton type="submit" titulo="Guardar" B_oscuro={false} T_oscuro={true} />
          </div>
        </SectionEstilizada>
      </form>
      <div className="w-full absolute flex gap-10 bottom-0">
          <Boton onClick={limpiarInput} titulo="Limpiar" B_oscuro={false} T_oscuro={false} />
        </div>
      <Footer />
    </>
  );
};

export default NuevoVideo;
