import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Menu.css'
import Circle from '../../img/circle.png'

export default function Menu() {
    return(
        
        
        /*  Contém todos os itens do menu nesse conponente.
            -------------------Com direito a "&amp;" mostrado em aula--------------- */
    
            <Container fluid> 
                <nav id="menu-h">
                    <ul>
                            <li><a href="#" id='live'> Nacional<img id='circle' src={Circle} alt="ao-vivo" /></a></li>
                            <li><a href="#"> Business</a></li>
                            <li><a href="#"> Internacional</a></li>
                            <li><a href="#" id='saude'> Saúde</a></li>
                            <li><a href="#"> Tecnologia</a></li>
                            <li><a href="#"> Esporte</a></li>
                            <li><a href="#"> Entretenimento </a></li>
                            <li><a href="#"> Estilo</a></li>
                            <li><a href="#"> Viagem &amp; Gastronomia</a></li> 
                            <li><a href="#"> Newsletters</a></li>
                            <li><a href="#"> Podcasts</a></li> 
                        </ul>
                </nav>
            </Container>

    );
};