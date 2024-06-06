import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #d3d3d3;
  justify-content: center;
  align-items: center;
  height: 650px;
`;

export const Div1 = styled.div`
  width: 350px;
  margin-right: 550px; /* Adiciona margem direita para afastar da Div2 */
`;
export const Div1text = styled.h3`
  width: 580px;
  margin-right: 550px; /* Adiciona margem direita para afastar da Div2 */
`;

export const Div2 = styled.div`
  height: auto;
  width: 320px;
  border-radius: 10px;
  background-color: #e3e4f0;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const DivCalendario = styled.div``;

export const SelectDay = styled.div`
  margin-bottom: 20px;
`;

export const Horario = styled.div`
  margin-bottom: 20px;
`;

export const TituloAgendamento = styled.h3`
  font-family: cursive;
  display: flex;
  justify-content: center;
`;

export const Titulomotivo = styled.h3`
  font-family: cursive;
  display: flex;
  justify-content: flex-start;
`;

//----------------------------------------------------------botões
export const Button1 = styled.button`
  width: 50px;
  margin: 0 5px;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const Button2 = styled.button`
  width: 50px;
  margin: 0 5px;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const Button3 = styled.button`
  width: 50px;
  margin: 0 5px;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const ButtonConfirmar = styled.button`
  border: none;
  color: white;
  background-color: #0fa943;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const Motivo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Inputmotivo = styled.input`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 20px;
`;

export const Parhorario = styled.p`
  font-family: cursive;
  margin-left: 10px;
  display: flex;
  justify-content: left;
`;
