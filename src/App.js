import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Hello from './Hello'

function TextLinkExample() {
  return (
    <>
    <div>  
    
  <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Hello/>
    </div>        
</>

  );
}
export default TextLinkExample;