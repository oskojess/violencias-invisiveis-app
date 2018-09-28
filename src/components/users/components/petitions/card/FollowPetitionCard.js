import * as React from "react";
import { withRouter } from "react-router";
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import MainTitle from '../../../../template/MainTitle';
import StatusIcon from '../../../../template/StatusIcon';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from 'classnames';

const styles = theme => ({
  titleDivider: {
    height: "3px",
    backgroundColor: "#1ea896"
  },
  space: {
    height: "25px"
  },
  colorWhite: {
    color: "#fff"
  },
  card: {
    backgroundColor: "#1ea896"
  },
  cardTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff"
  },
  cardContent: {
    padding: "8px 5%"
  },
  cardStatus: {
    display: "flex"
  },
  cardActions: {
    padding: "8px 5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  cardDivider: {
    width: "90%",
    textAlign: "center",
    margin: "0 auto",
    backgroundColor: "#fff"
  },
  cardContentCollapse: {
    padding: "0px 5%"
  },
  cardIcons: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "0"
  },
  audioIcon: {
    position: "absolute",
    right: "0px"
  },
  expandIcon: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    margin: "auto",
    color: "#fff"
  },
  expandIconOpen: {
    transform: "rotate(180deg)",
  }
});

class FollowPetitionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainTitle content="ACOMPANHAMENTO" icon="access_time"></MainTitle>
        <Divider className={classes.titleDivider} />
        <div className={classes.space}></div>

        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="subheading" className={classes.cardTitle}>
              <div>PROTOCOL0: COD918375</div>
              <div className={classes.cardStatus}>STATUS: <StatusIcon status={2} /></div>
            </Typography>
          </CardContent>

          <Divider className={classes.cardDivider} />

          <CardActions className={classes.cardActions}>
            <Typography variant="subheading" className={classes.colorWhite}>
              DESCRIÇÃO
            </Typography>
            <Typography variant="body1" className={classes.colorWhite}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </Typography>
            <div className={classes.cardIcons}>
              <div className={classes.expandIcon}>
                <IconButton
                className={classnames(classes.expandIcon, {
                  [classes.expandIconOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Mostrar Mais"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>

              <div className={classes.audioIcon}>
                <IconButton 
                className={classes.description}
                aria-expanded={this.state.expanded}
                aria-label="Audio Descrição"
                >
                  <VolumeUpIcon className={classes.colorWhite} />
                </IconButton>
              </div>
            </div>
          </CardActions>

          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.cardContentCollapse}>
              <Typography variant="subheading" className={classes.colorWhite}>
                OBSERVAÇÕES
              </Typography>
              <Typography paragraph variant="body1" className={classes.colorWhite}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

      </div>
    );
  }
}

FollowPetitionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(FollowPetitionCard));

