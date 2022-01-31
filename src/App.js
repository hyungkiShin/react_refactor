import INVOICE from "./json/invoices.json";
import PLAYS from "./json/play.json"
import { statement } from "./refactor/01";

function App() {
  console.log("INVOICE", statement(INVOICE[0], PLAYS));
  return <div className="App">
    {statement(INVOICE[0], PLAYS)}
  </div>;
}

export default App;
