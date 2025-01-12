import { Box, Paper, Stack, Typography } from "@mui/material";

import CustomAvatar from "../../CustomMUI/CustomAvatar";
import ForumPostUserIDComponent from "../ForumPost/ForumPostUserIDComponent";
import ForumTimeComponent from "../ForumTimeComponent";
import ForumPostTitleToolTip from "../ForumPost/ForumPostTitleToolTip";
import { Link } from "react-router-dom";
import React from "react";

export default function ForumHomePostComponent({ forumPost }) {
  //   console.log("forumPost", forumPost);
  const {
    // id,
    // title,
    // content,
    // imgS3Keys,
    createdAt,
    userID,
    // user,
    forumSubTopic,
    forumPostComments,
  } = forumPost;
  const forumPostComment = forumPostComments.items[0];
  return (
    <div>
      <Paper
        elevation={0}
        variant="outlined"
        // square
        sx={{
          maxWidth: "100%",
          // margin: "1rem auto",
          padding: "1rem",
          maxHeight: "255px",
          // borderRadius: "8px",
          // border: "1px solid #dfe1e5",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Stack direction="row">
            <Box sx={{ width: { xs: 268, sm: 420, md: 580 } }}>
              <Stack direction="column">
                <Box>
                  <ForumPostTitleToolTip
                    forumPost={forumPost}
                    forumSubTopic={forumSubTopic}
                  />
                </Box>
                <Stack direction="row">
                  由<ForumPostUserIDComponent userID={userID} />,
                  <ForumTimeComponent time={createdAt} />在
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    component={Link}
                    to={`/forum/${forumSubTopic.forumTopicID}/${forumSubTopic.id}`}
                    sx={{
                      textDecorationLine: "none",
                      "&: hover": { color: "primary.main" },
                    }}
                  >
                    {forumSubTopic.name}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Stack direction="column">
              <Typography>{forumPostComments.items.length}</Typography>
              <Typography>回复</Typography>
            </Stack>
          </Stack>

          <Box>
            {forumPostComment ? (
              <Stack direction="row">
                <CustomAvatar
                  link={true}
                  user={forumPostComment.user}
                  sx={{
                    width: { xs: 24, sm: 36 },
                    height: { xs: 24, sm: 36 },
                  }}
                />
                <Stack direction="column">
                  <Typography>{forumPostComment.content}</Typography>
                  <ForumTimeComponent time={forumPostComment.createdAt} />
                </Stack>
              </Stack>
            ) : (
              <Typography
                variant="subtitle2"
                component="span"
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  color: "grey",
                }}
              >
                都来说说话吧
              </Typography>
            )}
          </Box>
        </Stack>
      </Paper>
    </div>
  );
}
