import * as React from "react";
import { withRouter } from "react-router";
import Divider from "@material-ui/core/Divider";
import MainTitle from "../../../../template/MainTitle";
import PetitionCard from "../../../../template/PetitionCard";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  titleDivider: {
    height: "3px",
    backgroundColor: "#1ea896"
  },
  space: {
    height: "25px"
  }
});

class FollowPetitionCard extends React.Component {
  componentDidMount(){
    document.title = "Violências Invisíveis - Acompanhar Abaixo Assinado"
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainTitle content="ACOMPANHAMENTO" icon="access_time" />
        <Divider className={classes.titleDivider} aria-hidden="true" />
        <div className={classes.space} aria-hidden="true" />
        <PetitionCard
          status={1}
          protocol={"COD918375"}
          description={
            "Após você finalizar sua petição, você poderá acompanhá-la por aqui! Nesse campo estará um resumo do que você escreveu."
          }
          observations={"Aqui nas obervações serão os administradores que vão escrever para você, caso necessário."}
        />
        <div>
          <Divider className={classes.titleDivider} aria-hidden="true" />
          <div className={classes.space} aria-hidden="true" />
          <PetitionCard
            status={0}
            protocol={"COD918375"}
            description={
              "Após você finalizar sua petição, você poderá acompanhá-la por aqui! Nesse campo estará um resumo do que você escreveu."
            }
            observations={"Aqui nas obervações serão os administradores que vão escrever para você, caso necessário."}
          />
          <div>
            <Divider className={classes.titleDivider} aria-hidden="true" />
            <div className={classes.space} aria-hidden="true" />
            <PetitionCard
              status={1}
              protocol={"COD918375"}          
              description={
                "Após você finalizar sua petição, você poderá acompanhá-la por aqui! Nesse campo estará um resumo do que você escreveu."
              }
              observations={"Aqui nas obervações serão os administradores que vão escrever para você, caso necessário."}
            />
            <div>
              <Divider className={classes.titleDivider} aria-hidden="true" />
              <div className={classes.space} aria-hidden="true" />
              <PetitionCard
                status={1}
                protocol={"COD918375"}
                description={
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvoluutpat."
                }
                observations={
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing."
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FollowPetitionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(FollowPetitionCard));
