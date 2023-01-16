import './app.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import AnimalShow from "./AnimalShow";

function getRendomAnimals(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){

    // function myArray(){
    //     return [0,10,20,30];
    // }
    // ******Array destructuring in javascript start******

    // const getArray = myArray();
    // const firstElement = getArray[0];
    // const secondElement = getArray[1];
    // console.log(firstElement, secondElement);

    // ******Array destructuring in javascript end******

    // ******Array destructuring in react start******

    // const [firstElement, secondElement] = myArray();
    // console.log(firstElement, secondElement);

    // ******Array destructuring in react end******

    //const [count, setCount] = useState(0);
    const [animals, setAnimals]=useState([]);
    const clickHandle = () =>{
        //setCount(count + 1);
        setAnimals([...animals, getRendomAnimals()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    })

    return(
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" className='mb-5'>
                <Container>
                    <Navbar.Brand href="#home">Animal Show</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Button variant="primary" onClick={clickHandle}>Add Animal</Button>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                {/* <div>Number of animal : {count}</div> */}
                {/* <div>{animals}</div> */}
                <ul>{renderedAnimals}</ul>
            </Container>
        </div>
    )
}

export default App;