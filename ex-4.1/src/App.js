import Button from './components/Button'
function App() {
  return (
    <div className="App">
        <Button style={{fontWeight:'bold'}} text="Important"></Button>
        <Button style={{fontWeight:'normal'}} text="Not Important"></Button>
    </div>
  );
}

export default App;

