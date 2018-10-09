import * as React from "react";
import { withRouter } from "react-router";
import Speech from '../../../../template/speechRecognitionButton';

class StartPetitionCard extends React.Component {
  componentDidMount(){
    document.title = "Violências Invisíveis - Iniciar Abaixo Assinado"
  }
  
  render() {
    return (
      <div>
        <h1>StartPetition</h1>
        <Speech />
      </div>
    );
  }
}

export default withRouter(StartPetitionCard);
