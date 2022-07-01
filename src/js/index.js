//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const Containr = (props) => {
    return (
		<div className="container col-6 mt-2">
			<nav className="navbar navbar-dark bg-dark">
				<div id="timer" className="container d-flex text-white px-5">
					<div className="rounded-4" id="clock"><i class="far fa-clock"></i></div>
                    <div className="rounded-4">{props.digit6}</div>
                    <div className="rounded-4">{props.digit5}</div>
                    <div className="rounded-4">{props.digit4}</div>
                    <div className="rounded-4">{props.digit3}</div>
                    <div className="rounded-4">{props.digit2}</div>
                    <div className="rounded-4">{props.digit1}</div>
				</div>
			</nav>
		</div>
	);
};

//render your react application

let counter = 0;
setInterval(function(){
    const sixthPlace = Math.floor((counter/100000)%10);
    const fifthPlace = Math.floor((counter/10000)%10);
    const fourthPlace = Math.floor((counter/1000)%10);
    const thirdPlace = Math.floor((counter/100)%10);
    const secondPlace = Math.floor((counter/10)%10);
    const firstPlace = Math.floor((counter)%10);
    console.log(sixthPlace,fifthPlace,fourthPlace,thirdPlace,secondPlace,firstPlace);
    counter++;
    ReactDOM.render(<Containr digit6={sixthPlace} digit5={fifthPlace} digit4={fourthPlace} digit3={thirdPlace} digit2={secondPlace} digit1={firstPlace} />, document.querySelector("#app"));
},1000)


