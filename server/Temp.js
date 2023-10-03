
import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

function Temp() {

  const [showResult, setShowResult] = useState(false);

  const [data, setData] = useState('');

  const positiveShowResult = () => {
    setShowResult(true);


  }

  const negativeShowResult = () => {
    setShowResult(false)

  }


  const [user, setUser] = useState({
    field_1: "", field_2: "", field_3: "", field_4: "",
    field_5: "", field_6: ""
  });

  let name, value;

  const handleInputs = (e) => {

    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }


  function PostData(e) {
    e.preventDefault();

    const temp = `${user.field_1},${user.field_2},${user.field_3},${user.field_4},${user.field_5},${user.field_6}`;

    axios.get("http://localhost:5000/predict/" + temp)
      .then(function (response) {
        console.log(response);
        setData(response.data);
        positiveShowResult();

      }).catch((err) => {
        console.log(err);
      })
  }


  return (
    <>

      <div className="container">
        <div className="shadow p-5 m-5 bg-white rounded adminpContainer">

          <div class="form-body">
            <div class="row">
              <div class="form-holder">
                <div class="form-content">
                  <center class="text-danger"><h1>Corrona Prediction</h1></center>
                  <br />
                  <div class="form-items">
                    <h3 className="caHeading">Enter Input Data for Predicting Corrona Disease of Patient</h3>

                    <form class="requires-validation mt-3" novalidate method="post" onSubmit={(e) => PostData(e)}>

                      <div className="pInputContainer container m-2">

                        <input class="form-control mt-2" type="number" step=".01" onChange={handleInputs} required="true" placeholder="Enter the Age " name="field_1" />
                        <input class="form-control mt-2" type="number" step=".01" onChange={handleInputs} required="true" placeholder="Enter the Heart Rate " name="field_2" />

                        <input class="form-control mt-2" type="number" step=".01" onChange={handleInputs} required="true" placeholder="Enter the Temperature " name="field_3" />
                        <input class="form-control mt-2" type="number" step=".01" onChange={handleInputs} required="true" placeholder="Enter the SPO_2 Saturation" name="field_4" />
                        <input class="form-control mt-2" type="number" step=".01" onChange={handleInputs} required="true" placeholder="Enter the BPM " name="field_5" />
                        <label for="html"><b>Gender</b></label><br />
                        <input type="radio" id="html" name="field_6" onChange={handleInputs} value="1" />
                        <label for="html">Male</label><br />
                        <input type="radio" id="css" name="field_6" onChange={handleInputs} value="0" />
                        <label for="css">Female</label><br />
                        <input type="radio" id="javascript" name="field_6" onChange={handleInputs} value="2" />
                        <label for="javascript">Other</label>
                      </div>

                      <div class="ubutton form-button mt-3 pr-8">

                        <input type="submit" className="btn btn-primary " id="Aditya" value="Predict" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Modal show={showResult} onHide={negativeShowResult}>
        <Modal.Header closeButton>
          <Modal.Title>Result of Corrona Prediction Model </Modal.Title>
        </Modal.Header>
        <Modal.Body>So , Recommended Status for given Patient based on its parameters is : <b>{data}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={negativeShowResult}>
            Okay
          </Button>

        </Modal.Footer>
      </Modal>
    </>


  );
}

export default Temp;
