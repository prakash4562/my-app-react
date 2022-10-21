import logo from './logo.svg';
import './App.css';
import './welcome/welcome'
import Welcome from "./welcome/welcome";
import Form from "./form/form"
import Display from "./condition/condition";
import {useState} from "react";

function App() {
    const [flag, setFlag] = useState(true);
    const toggleHandler = () => {
        if(flag) {
            setFlag(false)
        } else {
            setFlag(true);
        }
    }

  return (
      <div>
          <button onClick={toggleHandler} className="btn btn-primary">Toggle</button>
          <Display flag={flag}></Display>
        <Form></Form>
        <Welcome
        name={details.name}
        address={details.address}
        image={details.others.photoUrl}
        gender={details.others.gender}
        date={details.others.date.toLocaleTimeString()}></Welcome>
      </div>
  );
}

const details = {
  name: "Chitranshoo Prakash",
  address: "Milkinpur",
  others: {
    photoUrl: "https://images.unsplash.com/photo-1666224182627-7dc792e4b419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    gender: "Male",
    date: new Date()
  }
}

export default App;
