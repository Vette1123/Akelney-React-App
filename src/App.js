import Pages from "./pages/Pages";
import Category from "./componenets/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./componenets/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}> Akelney</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 5rem;
  }
`;
export default App;
