import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import ArticleIcon from "@mui/icons-material/Article";
import Collapse from "@mui/material/Collapse";
import EventIcon from "@mui/icons-material/Event";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ShopIcon from "@mui/icons-material/Shop";
import WorkIcon from "@mui/icons-material/Work";
import uwcssa_logo from "../../static/uwcssa_logo.svg";

const DrawerList = ({ toggleDrawer }) => {
  const [openStaff, setOpenStaff] = useState(false);

  const [openMarket, setOpenMarket] = useState(false);
  const [openForum, setOpenForum] = useState(false);
  const handleClick = () => {
    setOpenStaff(!openStaff);
  };

  const handleClickMarket = () => {
    setOpenMarket(!openMarket);
  };
  const handleClickForum = () => {
    setOpenForum(!openForum);
  };
  return (
    <div>
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <div>
            <ListItemButton
              component={Link}
              to="/article"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <ArticleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="近期新闻"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  color: "primary",
                }}
              />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/event"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <EventIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="活动"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  color: "primary",
                }}
              />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/career"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <WorkIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="开放职位"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  color: "primary",
                }}
              />
            </ListItemButton>
            <div>
              <ListItemButton onClick={handleClickForum}>
                <ListItemIcon>
                  <ForumIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="论坛"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
                {openForum ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>

              <Collapse in={openForum} timeout="auto">
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/forum"
                    onClick={toggleDrawer(false)}
                    sx={{ pl: 7 }}
                  >
                    <ListItemText
                      primary="论坛首页"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    disabled
                    sx={{ pl: 7 }}
                    component={Link}
                    to="/forum/forumPostUpload"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText
                      primary="发布帖子"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                    <AddIcon color="primary" />
                  </ListItemButton>
                </ListItem>
                {/* <ListItem>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    component={Link}
                    to="/forum/admin/forumTopicCURD"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary="论坛主题" />
                  </ListItemButton>
                </ListItem> */}
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    component={Link}
                    to="/forumPostList"
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText
                      primary="forumPostList"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton sx={{ pl: 7 }} disabled>
                    <ListItemText
                      primary="举报审核"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </div>

            <div>
              <ListItemButton onClick={handleClickMarket}>
                <ListItemIcon>
                  <ShopIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="商城"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
                {openMarket ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>

              <Collapse in={openMarket} timeout="auto">
                <ListItem>
                  <ListItemButton
                    component={Link}
                    to="/market"
                    onClick={toggleDrawer(false)}
                    sx={{ pl: 7 }}
                  >
                    <ListItemText
                      primary="商城首页"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    onClick={toggleDrawer(false)}
                    component={Link}
                    to="/market/create"
                  >
                    <ListItemText
                      primary="发布商品"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                    <AddIcon color="primary" />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    onClick={toggleDrawer(false)}
                    component={Link}
                    to="/market"
                  >
                    <ListItemText
                      primary="查看全部商品"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton sx={{ pl: 7 }} disabled>
                    <ListItemText
                      primary="举报审核"
                      primaryTypographyProps={{
                        fontSize: 18,
                        fontWeight: "medium",
                        color: "primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            </div>
          </div>
        </List>

        <Divider />
        <List>
          <div>
            <ListItem>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <img
                    src={uwcssa_logo}
                    alt="uwcssaLogo"
                    style={{ height: "24px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="学生会"
                  primaryTypographyProps={{
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "primary",
                  }}
                />
                {openStaff ? <ExpandMore /> : <ExpandLess />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openStaff} timeout="auto">
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  component={Link}
                  to="/staff"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText
                    primary="学生会管理系统首页"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ pl: 4 }} disabled>
                  <ListItemText
                    primary="成员"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ pl: 4 }} disabled>
                  <ListItemText
                    primary="财务"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  component={Link}
                  to="/staff/event/postEvent"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText
                    primary="活动策划"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to="/staff/uwcssaJob/postUwcssaJob"
                >
                  <ListItemText
                    primary="职位招聘"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to="/staff/uwcssaJob/postDepartment"
                >
                  <ListItemText
                    primary="部门管理"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to="/staff/article/postArticle"
                >
                  <ListItemText
                    primary="新闻发布"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{ pl: 7 }}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  to="/forum/admin/forumTopicCURD"
                >
                  <ListItemText
                    primary="论坛管理"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ pl: 4 }} disabled>
                  <ListItemText
                    primary="举报审核"
                    primaryTypographyProps={{
                      fontSize: 18,
                      fontWeight: "medium",
                      color: "primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Collapse>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListItemButton
              component={Link}
              to="/foundingTeam"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>
                <GroupIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="创始团队以及贡献者"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "medium",
                  color: "primary",
                }}
              />
            </ListItemButton>
          </div>
        </List>
      </Box>
    </div>
  );
};
export default DrawerList;
