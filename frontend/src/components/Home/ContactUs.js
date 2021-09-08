import React from "react";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import wechatQrCode from "../../static/wechatQrCode.png";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 368,
    margin: "auto",
  },
  cards: {
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  title: {
    marginTop: "5rem",
    marginBottom: "2rem",
  },
  content: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  qrCode: {
    height: 188,
    width: 188,
  },
}));
const ContactUs = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.root}>
        <Box className={classes.cards}>
          <Typography variant="h5" className={classes.title}>
            想加入我们?
          </Typography>
          <Typography variant="body1" className={classes.content}>
            中国学生社区是UWCSSA工作的中心。加入UWCSSA不仅可以让你有机会获得同龄人的生活和学习经验，还可以获得工作经验和新技能。
          </Typography>
          <Button variant="outlined" color="primary">
            加入我们
          </Button>
        </Box>
        <Box className={classes.cards}>
          <Typography variant="body1" className={classes.content}>
            无论您是对支持学生还是对青年市场感兴趣，我们都可以帮助您以各种独特而有效的方式接触年轻人并与他们产生共鸣。
          </Typography>
          <Button variant="outlined" color="primary">
            联系我们
          </Button>
        </Box>
        <Box className={classes.cards}>
          <Typography variant="h5" className={classes.title}>
            支持我们
          </Typography>
          <Typography variant="body1" className={classes.content}>
            如果你喜欢我们的网站，可以扫描下方二维码进行捐款，帮助我们建立一个更好的网站！
          </Typography>
          <img src={wechatQrCode} alt="QrCode" className={classes.qrCode} />
        </Box>
      </Box>
    </Fragment>
  );
};
export default ContactUs;