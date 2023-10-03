import { useState } from 'react'
import './App.css'
import AgeCard from './components/Age'
import BPMCard from './components/BPM'
import EKGCard from './components/EKG'
import GenderCard from './components/Gender'
import TempCard from './components/Temp'
// import { predictResult } from './services/predict'
import axios from 'axios'


function App() {
  const [temp, setTemp] = useState("");
  const [ekg, setEkg] = useState("");
  const [bpm, setBpm] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [result, setResult] = useState("");

  async function predictResult(
    temp,
    ekg,
    bpm,
    age,
    gender
  ) {
    const argsStr = `${age},${ekg},${temp},${97},${bpm},${gender}`;

    axios.get("http://localhost:5000/predict/" + argsStr)
      .then(function (response) {
        console.log(response);
        setResult(response.data);
        return response.data;

      }).catch((err) => {
        console.log(err);

      })
  }

  async function onSubmit() {
    let res = await predictResult(temp, ekg, bpm, age, gender)
    console.log(res, "res1W");
    setResult(res?.data)
  }

  // useEffect(() => {
  //   console.log("effect");

  // }, [temp, ekg, bpm, age, gender
  // ])

  return (
    <>
      <h1 className='py-3'>Healthkaka.com </h1>

      <button onClick={() => {
        document.location.reload()
      }}>
        Refresh
      </button>

      <section>

        <div className="text-black mx-auto grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-9 p-8 " >
          <TempCard temp={temp} setTemp={setTemp} />
          <EKGCard ekg={ekg} setEkg={setEkg} />
          <BPMCard bpm={bpm} setBpm={setBpm} />

          <br />
          <AgeCard age={age} setAge={setAge} />
          <GenderCard gender={gender} setGender={setGender} />
        </div>

        <div>

          <button onClick={onSubmit}>Predict</button>
          <h1>{result}</h1>


        </div>
      </section>
    </>
  )
}

export default App
