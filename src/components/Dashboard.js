import * as React from "react";
import { withRouter } from "react-router";
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MainTitle from '../components/template/MainTitle';
import MainButton from './template/MainButton';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  text: {
    padding: "1em"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    paddingRight: "5px",
    fontSize: "26px"
  },
  cardSpace: {
    margin: "0em 5em 0em 5em"
  },
  CardContent: {
    paddingTop: "8px",
    paddingBottom: "8px"
  },
  CardActions: {
    paddingTop: "16px",
    paddingBottom: "16px",
    display: "flex",
    justifyContent: "center"
  },
  TitleDivider: {
    height: "3px"
  },
  cardDivider: {
    width: "90%",
    textAlign: "center",
    margin: "0 auto"
  }
});

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainTitle content="BEM-VINDA AO VIOLÊNCIAS INVISÍVEIS" icon="stars"></MainTitle>
        <Divider className={classes.TitleDivider} />
        <Typography align="justify" className={classes.text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </Typography>
        <Card className={classes.cardSpace}>
          <CardContent className={classes.CardContent}>
            <Typography variant="subheading" className={classes.center}>
              <Icon className={classes.icon}>star_border</Icon>
              INICIAR UM ABAIXO-ASSINADO
            </Typography>
          </CardContent>
          <Divider className={classes.cardDivider}/>
          <CardActions className={classes.CardActions}>
          <MainButton content="COMEÇAR"></MainButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
  
export default withRouter(withStyles(styles)(Dashboard));
