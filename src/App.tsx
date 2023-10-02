import './App.css'

function App() {

  const supportWebWorkers: boolean = !!window.Worker;
  const supportSharedWorkers: boolean = !!window.SharedWorker;

  return (
    <>
      <div>
        <p>supportWebWorkers {supportWebWorkers.toString()}</p>
        <p>supportSharedWorkers {supportSharedWorkers.toString()}</p>
      </div>
    </>
  )
}

export default App
