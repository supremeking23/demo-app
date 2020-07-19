import React from "react";

//similar to the old fasion function, in this case we are assigning it to a constant


const Person = (props) => {

    const [one,setTwo] = React.useState(1);
    console.log(React.useState(1));
    return(
        
        <div>
            <p>calling the person component using function base {one}</p>
            <p>Hello from {props.name} and I am {props.age}</p>
            {/* {props.children} */}
        </div>
    );
}


// function person(props){
    
//     const [one,setOwo] = React.useState(1);

//     function increase(){
//         setOwo(one +1);
//     }
//     return(
        
//         <div>
//             <p>calling the person component using function base {one}</p>
//             <p>Hello from {props.name} and I am {Math.floor(Math.random() * 30)}</p>
//             {props.children}
//         </div>
//     );
    
// }


//When using class based component
// class Person extends React.Component {
//     render(){
//         return(
//             <p>My Name is {this.props.name}</p>
//         );
//     }
// } 

///kailangan capital



export default Person;

//bakuna outfit