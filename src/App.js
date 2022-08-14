
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import Layout from "./components/layout/Layout";

export default function App() {
  return (
        <Router>
          <div>
                    <Layout/>
              </div>
        </Router>
         
  );
}
