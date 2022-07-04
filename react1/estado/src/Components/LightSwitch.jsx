import { Component } from 'react';
      

class LightSwitch extends Component {

    constructor(props) { //esto se ejecuta una ves
        super(props);
        this.state = { //el estado se almacena en una variable state, se define dentro
            //del constructor.
            position: "On" //

        };

        this.flipSwitch = this.flipSwitch.bind(this);

    }

    flipSwitch(){

        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }

    }

//simpre que se actualiza cualquier informaion de estado se va
// a renderizar el componente, para reflejar los cambio realizados.
    render() {
        return (
            <fieldset> 
                <p>The light is currently { this.state.position }</p>
                <button onClick={this.flipSwitch}>Flip Switch</button>
                </fieldset>
            );
    }
}

export default LightSwitch;