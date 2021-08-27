import React from 'react'
import { Container, Row, Col, Grid } from 'react-bootstrap'
import './Conteudo.css'
import Logo from '../../img/logo.svg'


export default function Conteudo() {
    return(
        
        /* Comtém todos os conteudos presentes no body da tela */

            <Container fluid='sm'> 
                <div className="site-content">
                    <div className="manchete">
                        <Row className="justify-content-md-center">
                            <h1>Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>
                        </Row>
                        <Row className="texto-manchete">
                            <p>A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>
                        </Row>
                        <Row className="autor">
                            <p><b><u>Lucas Rocha</u></b>, da CNN</p>
                            <p>São Paulo</p>
                        </Row>
                        <Row className="horario-mocado">
                            <p>24/08/21 às 16:44 | Atualizado às 16:56</p>
                        </Row>
                        <Row className="logo-cnn">
                            <img src={Logo} alt="CNN" />
                        </Row>
                        <Row className="texto-noticia">
                        <p>Por ser uma doença nova, a <a href='#'>Covid-19</a> ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
                        <p>A <a href='#'>variante Delta da Covid-19</a>, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
                        </Row>
                    </div>
                </div>
                
            </Container>

    );
};