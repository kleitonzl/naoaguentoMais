import {Horario,TituloAgendamento,Titulomotivo, Inputmotivo, Motivo,SelectDay, Div1,Div1text, Div2,DivCalendario, Container, Button1,Button2,Button3,ButtonConfirmar,Parhorario } from '../Styles/Agendamento.js'

const Sobre = ({ paragraph }) => {
    return (
        <Container>
            <Div1>
                <Div1text>{paragraph}</Div1text>
                <Div1 style={{backgroundColor:"#a9a9a9", padding:'80px 100px', margin:'10px'}}></Div1>
            </Div1>
            <Div2>
                <SelectDay>
                    <TituloAgendamento>selecione o dia</TituloAgendamento>
                    <hr />
                    <Parhorario>calendario</Parhorario>
                    <DivCalendario style={{backgroundColor:"white", height:"60px", width: "auto"}}>
                        
                    </DivCalendario>
                   <hr />
                </SelectDay>
                
                <Horario>
                    <Parhorario>horarios</Parhorario>
                    <div style={{display:'flex'}}>
                    <Button1>08:00</Button1>
                    <Button2>09:30</Button2>
                    <Button3>11:00</Button3>
                    </div>
                    <hr />
                </Horario>
                <Motivo>
                    <Titulomotivo>motivo</Titulomotivo>
                   
                    <Inputmotivo type="text" placeholder="Digite seus motivos para o agendamento..." />
                    
                    <ButtonConfirmar>confirmar agendamente</ButtonConfirmar>
                </Motivo>
            </Div2>
        </Container>
    )
}

export default Sobre;
