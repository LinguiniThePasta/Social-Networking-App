import './App.css'
import PrimaryButton from "./components/PrimaryButton.tsx";

function App() {
  return (
    <>
        <PrimaryButton onClick={() => console.log('Button clicked!')} size={'large'}>
            Click me
        </PrimaryButton>
    </>
  )
}

export default App
