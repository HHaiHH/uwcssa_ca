import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getImage, selectImageById } from "../../redux/reducers/imageSlice";
import { useDispatch, useSelector } from "react-redux";

import InsideLeftLineTag from "./tag";
import { Link } from "react-router-dom";
import LocationOn from "@mui/icons-material/LocationOn";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  actionArea: {
    maxWidth: 300,
    minWidth: 256,
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardDetails: {
    maxWidth: 300,
    minWidth: 256,
    borderRadius: 16,
    color: "transparent",
    boxShadow: "none",
    overflow: "initial",
    height: 300,
    "&:hover": {
      boxShadow: "0 6px 12px 0 #757ce8",
    },
  },
  cardMedia: {
    display: "block",
    marginLeft: "auto",
    marginRight: " auto",
    width: "50%",
    position: "relative",
  },

  s3image: {
    width: "162px",
    height: "162px",
    borderRadius: "8px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "112px",
      height: "112px",
      marginTop: "2.5rem",
    },
  },
  statLabel: {
    fontSize: 12,
    color: grey[500],
    fontWeight: 500,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  content: {
    position: "relative",
    padding: 24,
    margin: "-24% 9px 0",
    backgroundColor: "#fff",
    borderRadius: 4,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
}));

export default function PastEvent({ event }) {
  const classes = useStyles();
  const [imageURL, setImageURL] = useState(null);
  const dispatch = useDispatch();
  // console.log("event", event);
  const { id, title, startDate, endDate, location, content, posterImgS3Key } =
    event;

  const imgKeys = useSelector((state) =>
    selectImageById(state, posterImgS3Key)
  );

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await dispatch(
          getImage({ url: [posterImgS3Key], id: posterImgS3Key })
        );
        setImageURL(response.payload.imgUrl);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (posterImgS3Key && imgKeys === undefined) {
      getImages();
    } else if (posterImgS3Key && imgKeys !== undefined) {
      setImageURL(Object.values(imgKeys.images)[0]);
    } else if (posterImgS3Key === "") {
      setImageURL(
        "https://media-exp1.licdn.com/dms/image/C5603AQHwt3NgA8rYHw/profile-displayphoto-shrink_200_200/0/1616353723146?e=1640822400&v=beta&t=wzrF9eUlq7YnsTg-1cpH4LrYXm2oCCOHHHp0ac1hmgM"
      );
    }
  }, [posterImgS3Key, imgKeys, dispatch]);

  //console.log("imageURL", title, imageURL);
  // const userInfo = useSelector((state) => state.userAuth);

  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      key={event.title}
      sx={{ marginBottom: "1rem" }}
    >
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={`/event/${id}`}
      >
        <Card className={classes.cardDetails} elevation={0}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="194"
              image={imageURL}
              style={{ objectFit: "cover", opacity: 0.9 }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
              }}
            >
              <InsideLeftLineTag />
            </Box>

            <CardContent className={classes.content}>
              <Typography variant="subtitle2" gutterBottom>
                时间：{startDate.slice(5, 7)}月{startDate.slice(8, 10)}号{" "}
                {startDate.slice(11, 16)} -{endDate.slice(5, 7)}月
                {endDate.slice(8, 10)}号 {endDate.slice(11, 16)}
              </Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                gutterBottom
              ></Typography>
              <Box style={{ maxHeight: "30px", overflow: "hidden" }}>
                <Typography
                  variant="subtitle1"
                  style={{
                    wordBreak: "break-word",
                    overflow: "hidden",
                  }}
                  gutterBottom
                >
                  <b>{title}</b>
                </Typography>
              </Box>

              {location ? (
                <Box
                  color={"grey.500"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={1}
                >
                  <LocationOn />
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {location}
                  </Typography>
                </Box>
              ) : (
                <Box
                  color={"grey.500"}
                  display={"flex"}
                  alignItems={"center"}
                  mb={1}
                >
                  <LocationOn />
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    gutterBottom
                  >
                    无
                  </Typography>
                </Box>
              )}
              {/* {topic.name ? (
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                类别： {topic.name}
              </Typography>
            ) : (
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                类别： 无
              </Typography>
            )} */}

              <Box sx={{ overflow: "hidden", height: "30px" }}>
                <Grid container wrap="nowrap" sx={{ my: 1, mx: "auto" }}>
                  <Grid item xs zeroMinWidth>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {content}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
