import Calculator from "./Calculator";
import { questions } from "./Questions";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-N16Q3ME9BZ');

function App() {
  return (
    <>
      <Calculator category ={questions.category} />
      <></>
    </>
  );
}

export default App
