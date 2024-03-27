import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Blogs = () => {

  const [cardData,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3005/api/view').then((res)=>{
      console.log(res.data.data);
      setData(res.data.data);
    })
  },)

  return (
    <div style={{ margin: "7%" }}>
        <Grid container spacing={2}>
             {cardData.map((val,i) => (
               <Grid item key={i} xs={12} sm={6} md={4}>
               <Card sx={{ maxWidth: 400}}>
                <CardMedia
                 component="img"
                 alt="...."
                 height="200"
                 image={val.image}/>
                <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                  {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {val.post}
                    </Typography>
                 </CardContent>
                <CardActions>
               <Button variant='contained' color='info' size="small">Update</Button>
               <Button variant='contained' color='error' size="small">Delete</Button>
                 </CardActions>
               </Card>
           </Grid>
              ))}
       </Grid>

    </div>
  )
}

export default Blogs