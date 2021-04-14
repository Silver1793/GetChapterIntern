/**
 * Richard Li
 * This is the frontend of the app
 * Shows a header, intro and a search box
 * The purpose of this is to display everything onto the webpage
 */
import './App.css';
import StoreData from "./StoreData";

function App() {
  return (
    <>
      <OurHeader />
      <OurIntro />
      <StoreData /> {/*Gets the information from StoreData and returns it*/}
    </>
  );
}
function OurHeader(){ //Creates the Header
  return <h1>Welcome To Our Search Engine</h1>
}
function OurIntro(){ //Create the Introduction
  return (
    <>
    <p>Please input your Bid ID</p>
    <p>Acceptable formats are as followed</p>
    <p>Xxxxx-xxx-xxx or Xxxxx_xxx_x</p> {/*Tells the user what formats are acceptable*/}
    </>
  )
}

export default App;
