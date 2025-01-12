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

//点太快，selectedMarket来不及删，会产生bug; Solved!

export function MarketRentalInfo({ marketItem, mode = "detail" }) {
  const [open, setOpen] = useState(false);
  const {
    id,
    // name,
    // imgS3Keys,
    // title,
    price,
    description,
    tags,
    // active,
    createdAt,
    updatedAt,
    // ByCreatedAt,
    owner,
    marketRentalSaleRent,
    propertyType,
    bedroomCounts,
    // bathroomsCounts,
    address,
    // propertySize,
    // dateAvailable,
    // laundryType,
    user,
    airConditionType,
    heatingType,
    catFriendly,
    dogFriendly,
    contactEmail,
    contactPhone,
    contactWeChat,
  } = marketItem;

  return (
    <Paper sx={{ maxWidth: "100%" }}>
      <TitleInfo
        type="rental"
        price={price}
        updatedAt={updatedAt}
        owner={owner}
        open={open}
        user={user}
        contactEmail={contactEmail}
        contactWeChat={contactWeChat}
        contactPhone={contactPhone}
        handleOpen={() => setOpen(true)}
        handleClose={() => setOpen(false)}
        id={id}
        mode={mode}
        propertyType={propertyType}
        bedroomCounts={bedroomCounts}
        marketRentalSaleRent={marketRentalSaleRent}
      />
      <Divider />
      <DetailInfo
        type="rental"
        tags={tags}
        description={description}
        airConditionType={airConditionType}
        heatingType={heatingType}
        catFriendly={catFriendly}
        dogFriendly={dogFriendly}
        address={address}
      />
      <Divider />
      <SellerInfo user={user} createdAt={createdAt} owner={owner} />
    </Paper>
  );
}

export default function MarketRentalDetail() {
  const classes = detailStyle();
  const dispatch = useDispatch();
  useTitle("租房信息");
  const { id } = useParams();

  useEffect(() => {
    dispatch(selectedMarketItem(id));
  }, [id, dispatch]);

  const marketItem = useSelector((state) => selectMarketItemById(state, id));
  const status = useSelector((state) => state.market.selectedMarketItemStatus);
  const starter = useStarter(marketItem);
  const imgKeyFromServer = useGetImages(marketItem, id);

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
            <MarketRentalInfo marketItem={marketItem} />
          </Box>
        </Stack>
      )}
    </div>
  );
}
