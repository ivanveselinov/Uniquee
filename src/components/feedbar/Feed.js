import { Avatar } from "@material-ui/core";
import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Feed({category, description, postImage, price, productOwner,ownerPhoto, postTime}) {
  const [expanded, setExpanded] = React.useState(false);
  console.log(category);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
 
  <Card sx={{ maxWidth: 900 }, {marginBottom: 5}}>
    
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
        className="h-56 md:h-96" image={postImage}
        alt={postImage}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
          <div className="flex justify-between w-full pt-3 border-t-2 mt-4 border-b1 ">
      
        <div className>
        <Button variant="text" name="Category">Category: {category}</Button>
        </div>
        <div className>
        <Button variant="text" name="Price">Price: {price}$</Button>
        </div>
        <div className>
        <Button variant="text" name="Cagetogy">Add to basket:</Button>
        </div>
      </div>
      <div className="border-t flex justify-between w-full">
        
      <div className="flex w-1/4 justify-end">
        <Button variant="text" name="Like">Like</Button>
        </div>
        <div className="flex justify-between w-1/4">
        <Button variant="text" name="Share">Comment</Button>
        </div>
      </div>
   
        </Typography>
        
      </CardContent>
    
      
      
    
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
 );
}

//   return (
//     <div className="border-2 w-3/4 max-w-3/4 min-w-3/4 mt-3 mb-3 m-auto rounded-xl ">
//     <div className="border-2 w-3/4 m-auto ">
  
//     <div className="border-2 mt-3 mb-1 flex "><Avatar alt="Cindy Baker" src={ownerPhoto} />
//     <div className="w-1/2 border text-left m-auto ml-2">{productOwner}</div>
   
//     </div>
   
//   </div>
//     <div className="border-2 w-3/4 m-auto mt-2 max-w-3/4 min-w-3/4"> <p>{description}</p></div>
      
//   <div className="border-2 m-auto mt-5 max-w-sm min-w-sm">
//   <img  src={postImage}/>
//   </div>
// {/* 
//   <div className="border-2 m-auto mt-5 w-full h-96 overflow-hidden">
//   <img className="w-full h-full object-contain" src={postImage}/>
//   </div> */}

      // <div className="flex justify-between w-full pt-3 border-t-2 mt-4 border-b1">
      //   <div className="inputBtn">
      //     <p>Category: {category}</p> 
      //   </div>
      //   <div className="inputBtn">
      //     <p>Price: {price}$</p>
      //   </div>
      //   <div className="inputBtn">
      //     <p>Add to basket</p>
      //   </div>
      // </div>
      // <div className="border flex justify-between w-full">
      //   <div className="inputBtn">
      //     <p>Like</p>
      //   </div>
      //   <div className="inputBtn">
      //     <p>Comment</p>
      //   </div>
      // </div>
//     </div>
//   );
// }



export default Feed;
