import { Box, Divider, Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  selectMarketItemById,
  selectedMarketItem,
} from "../../redux/reducers/marketSlice";
import { useDispatch, useSelector } from "react-redux";

import DetailInfo from "../../components/Market/detailInfo";
import { Loading } from "../../components/Market/loading";
import SellerInfo from "../../components/Market/sellerInfo";
import SwipeViews from "../../components/SwipeViews";
import TitleInfo from "../../components/titleInfo";
import { detailStyle } from "../../components/Market/marketDetailCss";
import useGetImages from "../../components/Market/useGetImages";
import { useParams } from "react-router-dom";
import useStarter from "../../components/Market/useStarter";
import { useTitle } from "../../Hooks/useTitle";

export function MarketItemInfo({ marketItem, mode = "detail" }) {
  const [open, setOpen] = useState(false);
  const {
    id,
    // name,
    // imgS3Keys,
    title,
    price,
    description,
    location,
    marketItemCondition,
    marketItemCategory,
    tags,
    // active,
    updatedAt,
    createdAt,
    user,
    // userID,
    // ByCreatedAt,
    contactEmail,
    contactPhone,
    contactWeChat,
    owner,
  } = marketItem;

  return (
    <Paper sx={{ maxWidth: "100%" }}>
      <TitleInfo
        id={id}
        mode={mode}
        title={title}
        price={price}
        updatedAt={updatedAt}
        owner={owner}
        open={open}
        user={user}
        contactEmail={contactEmail}
        contactPhone={contactPhone}
        contactWeChat={contactWeChat}
        handleClose={() => setOpen(false)}
        handleOpen={() => setOpen(true)}
        type="item"
      />
      <Divider />
      <DetailInfo
        marketItemCategory={marketItemCategory}
        marketItemCondition={marketItemCondition}
        tags={tags}
        description={description}
        location={location}
        type="item"
      />
      <Divider />
      <SellerInfo user={user} createdAt={createdAt} owner={owner} />
    </Paper>
  );
}

export default function MarketItemDetail() {
  const classes = detailStyle();
  const dispatch = useDispatch();
  useTitle("二手商品信息");
  const { id } = useParams();

  useEffect(() => {
    dispatch(selectedMarketItem(id));
  }, [id, dispatch]);

  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const status = useSelector((state) => state.market.selectedMarketItemStatus);
  const starter = useStarter(marketItem);
  const imgKeyFromServer = useGetImages(marketItem, id);

  console.log("starter", starter);
  return (
    <div className={classes.root}>
      {starter === false ? (
        <Loading status={status} />
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          className={classes.contain}
        >
          <Box className={classes.images}>
            <SwipeViews images={imgKeyFromServer} />
          </Box>
          <Box className={classes.info}>
            <MarketItemInfo marketItem={marketItem} />
          </Box>
        </Stack>
      )}
    </div>
  );
}
