import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Menu.css'


export default function Menu() {
    return(
        
        
        /*  Contém todos os itens do menu nesse conponente.
            -------------------Com direito a "&amp;" mostrado em aula--------------- */
    
            <Container fluid> 
                <nav id="menu-h">
                    <ul className="">
                            <li><a href="#"> Nacional</a></li>
                            <li><a href="#"> Business</a></li>
                            <li><a href="#"> Internacional</a></li>
                            <li><a href="#"> Saúde</a></li>
                            <li><a href="#"> Tecnologia</a></li>
                            <li><a href="#"> Esporte</a></li>
                            <li><a href="#"> Entreterimento </a></li>
                            <li><a href="#"> Estilo</a></li>
                            <li><a href="#"> Viagem &amp; Gastronomia</a></li> 
                            <li><a href="#"> Newslatters</a></li>
                            <li><a href="#"> Podcasts</a></li> 
                        </ul>
                </nav>
            </Container>

    );
};