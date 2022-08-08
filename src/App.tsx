import MUItypography from './components/MUItypography';
import './App.css';
import { MUIbutton } from './components/MUIbutton';
import { MUItextFeild } from './components/MUItextFeild';
import { MUIselect } from './components/MUIselect';
import { MUIradio } from './components/MUIradio';
import { MUIcheckbox } from './components/MUIcheckbox';
import { MUIswitch } from './components/MUIswitch';
import { MUIrating } from './components/MUIrating';
import { MUIautocomplete } from './components/MUIautocomplete';
import { MUIaccordion } from './components/MUIaccordion';
import { MUIlayout } from './components/MUIlayout';
import { MUIcard } from './components/MUIcard';
import { MUIimagelist } from './components/MUIimagelist';
import { MUInavbar } from './components/MUInavbar';


function App() {
  return (
    <div className="App">
      <h1 >MUI REACT REFERENCE</h1>
      <h3 >TEXT FIELD</h3>
     <MUItextFeild />
     <h3 >BUTTON</h3>
      <MUIbutton />
      <h3 >TYPHOGRAPHY</h3>
      <MUItypography />
      <h3 >SELECT</h3>
       <MUIselect />
       <h3 >RADIO</h3>
     <MUIradio />
     <h3 >CHECK BOX</h3>
     <MUIcheckbox />
     <h3 >SWITCH</h3>
     <MUIswitch />
     <h3 >RATING</h3>
     <MUIrating />
     <h3 >AUTOCOMPLETE</h3>
     <MUIautocomplete />
     <h3>LAYOUT</h3>
     <MUIlayout />
     <h3>CARD</h3>
     <MUIcard />
     <h3 >ACCORDION</h3>
     <MUIaccordion />
<h3>IMAGELIST</h3>
<MUIimagelist />
<h3>Navbar</h3>
<MUInavbar />
    </div>
  );
}

export default App;
