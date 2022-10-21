// let flag = false;
import './condition.css'
const Display = (props) => {
    if(props.flag) {
        return <ImageText></ImageText>
    } else {
        return <Image url="https://images.unsplash.com/photo-1666344869474-15bd512549e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></Image>
    }
}

const ImageText = () => {
    return <div>
        <h1>Image Text will be displayed</h1>
    </div>
}

const Image = (props) => {
    return <div>
        <img src={props.url}/>
    </div>
}

export default Display;
