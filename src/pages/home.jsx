import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

 export default function Home() {
      
        return (
          <Div>
              <Sidebar/>
              <Dashboard/>
          </Div>
        );
  }

  const Div = styled.div`
  position: relative;
`;
