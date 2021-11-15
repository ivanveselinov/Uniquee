import { Avatar, CardActions } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import CategoryIcon from "@material-ui/icons/Category";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { makeStyles } from "@mui/styles";
// import CardActions from "@mui/material/CardActions";

const useStyles = makeStyles((theme) => ({
  desc: {
    paddingBottom: 0,
  },
  btnHolder: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  likeBtn: {
    marginLeft: "3px",
  },
}));

function Feed({
  category,
  description,
  postImage,
  price,
  productOwner,
  ownerPhoto,
  postTime,
}) {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  console.log(category);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={({ maxWidth: 900 }, { marginBottom: 5 })}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <Avatar alt="Cindy Baker" src={ownerPhoto} />
          </Avatar>
        }
        title={productOwner}
        subheader={new Date(postTime?.toDate()).toLocaleString()}
      />
      <CardMedia
        component="img"
        height="194"
        className="h-56 md:h-96"
        image={postImage}
        alt={postImage}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          className={classes.desc}
        >
          <p className="">{description}</p>
        </Typography>
      </CardContent>
      <div className="flex justify-between w-full py-2 border-t mt-3 border-b1 ">
        <div className=" flex justify-center items-center space-x-2 w-1/3">
          <CategoryIcon /> <p>{category}</p>
        </div>
        <div className=" flex justify-center items-center w-1/3">
          <AttachMoneyIcon /> <p>{price}</p>
        </div>
        <div className=" w-1/3 flex cursor-pointer justify-center items-center group space-x-2">
          <p className="text-transparent group-hover:text-black text-xs">
            Add to basket
          </p>
          <ShoppingBasketIcon />
        </div>
      </div>
      <div className="border-t flex justify-between w-full ">
        <CardActions className={classes.btnHolder}>
          <Button variant="text" name="Like" onClick={() => setLiked(!liked)}>
            <span>&nbsp;</span>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            <span>&nbsp;Like</span>
          </Button>
          <Button variant="text" name="Share">
            <span>Comment&nbsp;</span>
            <CommentIcon />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default Feed;
