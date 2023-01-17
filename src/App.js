
import styled from "styled-components";
import ContactListComponent from "./Components/ContactListComponent";
import ConversationComponent from "./Components/CoversationComponent";

const Container = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%;
background: #f8f9fb;
`;
function App() {
  return (
  <Container>
    <ContactListComponent/> 
    <ConversationComponent/>
 </Container>
  );
}

export default App;
