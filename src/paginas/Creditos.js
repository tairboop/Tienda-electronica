import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const Creditos = () => {

    return (
        <div>
            <h1>Autor de la Pagina- Electronic Center</h1>
            <Card style={{ width: '18rem', margin: "auto", border: "5px solid #87CEEB" }}>
                <Card.Img variant="top" src="data:image/png;base64,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" />
                <Card.Body>
                    <Card.Title>Ronald Mamani Posto</Card.Title>
                    <Card.Text>
                        Ci: 1234567  RU:12345678
                    </Card.Text>
                    <Nav.Link href="https://github.com/tairboop/">
                        <Button variant="primary">Ir a github</Button>
                    </Nav.Link>
                </Card.Body>
            </Card>
            <h3>Agradecimientos</h3>
            <p>

                En primer lugar, quiero dar las gracias a mi profesor, Marisol Tellez, por su dedicación y apoyo durante el desarrollo de este proyecto. Sus consejos y comentarios fueron de gran ayuda para que pudiera completarlo con éxito.

                También quiero agradecer a mis compañeros de clase, que me ayudaron a aprender y crecer como programador web. Compartimos nuestras experiencias y conocimientos, lo que nos permitió mejorar nuestras habilidades.

                Por último, quiero agradecer a mi familia y amigos por su apoyo y ánimo. Siempre estuvieron ahí para mí, incluso cuando me sentía frustrado o cansado.

                Este proyecto ha sido una experiencia muy gratificante para mí. He aprendido mucho sobre la programación web, y he desarrollado nuevas habilidades que me serán útiles en mi futuro profesional.

                Espero que este proyecto sea de utilidad para los demás estudiantes que se inician en la programación web.

                Atentamente, Ronald</p>
        </div>
    )
}

export default Creditos
