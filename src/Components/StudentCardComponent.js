import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import data from "./studentData.json";
import "./index.scss";
const StudentData = data;
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  margin: "10px",
};
export default function StudentCard(props) {
  const classes = useStyles();
  console.log("props", props);
  const abc = () => {
    console.log('in view');
    return { pathname: `/view`, state: "view" };
  };
  return (
    <div className="Card">
      {StudentData.map((value, index) => {
        return (
          <div>
            <div className="Student-cards">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography component="h3">Name:{value.name}</Typography>
                    <Typography component="h3">Class:{value.class}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div>
              <Link to={{ pathname: `/view`, state: {mode:"view",id:index} }} className="Btn">
                View
              </Link>

              <Link
                to={{ pathname: `/view`, state: {mode:"edit",id:index} }}
                className={props.isAdmin === "admin" ? "Btn" : "Btn-disable"}
              >
                Edit
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
