import './form.css'
import {useState} from "react";

const Form = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredFullName, setEnteredFullName] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const fullNameChangeHandler = (event) => {
        setEnteredFullName(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        console.log("Form Details => ", enteredEmail, enteredFullName, enteredDate);
        // console.log(enteredEmail);
        // console.log(enteredFullName);
        // console.log(enteredDate);
    }

    return <div className="d-flex justify-content-center p-5">
        <form className=" form-body">
            <div className="form-group form">
                <label>Email</label>
                <input type="email" className="form-control" onChange={nameChangeHandler}/>
            </div>
            <div className="form-group form">
                <label>Full Name</label>
                <input type="text" className="form-control" onChange={fullNameChangeHandler}/>
            </div>
            <div className="form-group form">
                <label>Date</label>
                <input type="date" className="form-control" onChange={dateChangeHandler}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
        </form>
    </div>
}

export default Form
