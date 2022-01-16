import RandomJoke from "./components/RandomJoke"
import JokeCategory from "./components/JokeCategory"
const App = () => {
  return (
    <div className="app">
        < JokeCategory></JokeCategory>
        <RandomJoke/>
    </div>
  )
}
export default App