import React, {useState} from 'react';
import './welcome.css'

function Welcome(props) {
    const [name, setName] = useState(props.name);
    const [address, setAddress] = useState(props.address);
    const [gender, setGender] = useState(props.gender);
    const [image, setImage] = useState(props.image);
    const [date, setDate] = useState(props.date);

    const updateDetails = () => {
        setName("Jarvis technology and strategy consulting");
        setAddress("11, Ashoka road, delhi");
        setGender("Female");
        setImage("https://images.unsplash.com/photo-1666058091312-7cbb7d771f6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60");
        setDate(new Date().toLocaleTimeString())
    }

    const reset = () => {
        setName(props.name);
        setAddress(props.address);
        setGender(props.gender);
        setImage(props.image);
        setDate(new Date().toLocaleTimeString())
    }
    return <div>
        <h1 className="d-flex justify-content-center">{name}</h1>
        <h1 className="d-flex justify-content-center">{address}</h1>
        <h1 className="d-flex justify-content-center">{gender}</h1>
        <h1 className="d-flex justify-content-center">{date}</h1>
        <div className="d-flex justify-content-center">
            <img src={image} className="photo"/>
        </div>
        <button onClick={updateDetails} className="btn btn-primary m-2">update</button>
        <button onClick={reset} className="btn btn-primary m-2">Reset</button>
    </div>
}

// class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: props.name,
//             address: props.address,
//             photo: props.image
//         }
//     }
//
//     changeDetails = () => {
//         this.setState({
//             name: "Jarvis technology and strategy consulting",
//             address: "11, Ashoka road, delhi",
//             photo: "https://images.unsplash.com/photo-1608386964123-6b2cee22ea73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dW5zcGFsc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//         });
//     }
//
//     reset = () => {
//         this.setState({
//             name: "Chitranshoo Prakash",
//             address: "Milkinpur",
//             photo: "https://images.unsplash.com/photo-1570701123784-2d41777f5e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVuc3BhbHNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//         })
//     }
//
//     render() {
//         return <div>
//             <h1 className="text">My name is {this.state.name}</h1>
//             <h3 className="text">My address is {this.state.address}</h3>
//             <div className="d-flex justify-content-center">
//                 <img className="photo" src={this.state.photo}/>
//             </div>
//             <button onClick={this.changeDetails} className="btn btn-primary">Update state</button>
//             <button onClick={this.reset} className="btn btn-primary m-2">Reset</button>
//         </div>
//     }
// }

export default Welcome
