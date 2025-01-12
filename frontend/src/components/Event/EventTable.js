import {
  Button,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { fetchEvents_Staff } from "../../redux/reducers/staffSlice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3rem",
  },
  content: {
    margin: "3rem",
    padding: "3rem",
  },

  table: {
    minWidth: 650,
  },
}));

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          UWCSSA Event Data
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function SimpleTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents_Staff());
  }, [dispatch]);

  const { events } = useSelector((state) => state.staff);

  // console.log("events", events);

  const rows = events.map((event) => {
    console.log("event", event);
    const {
      id,
      title,
      location,
      startDate,
      eventStatus,
      topic,
      eventParticipants,
    } = event;

    return {
      id: id,
      title: title,
      location: location,
      startDate: startDate,
      topic: topic.name,
      eventParticipants: eventParticipants,
      eventStatus: eventStatus,
    };
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h4" component="h2" color="primary">
            Event Data
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/staff/event/postEvent"
          >
            New Event
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            aria-label="simple table"
            // rowsPerPageOptions={[5]}
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" />
                <TableCell sx={{ width: 150 }}>ID</TableCell>
                <TableCell sx={{ width: 110 }}>Title</TableCell>
                <TableCell sx={{ width: 110 }}>Topic</TableCell>
                <TableCell sx={{ width: 150 }}>Location</TableCell>
                <TableCell sx={{ width: 200 }}>Event Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <ExpandableTableRow
                    key={row.id}
                    expandComponent={
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Box margin={1}>
                          <Typography variant="h6" gutterBottom component="div">
                            Participants
                          </Typography>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>weChat</TableCell>
                                <TableCell>phone</TableCell>
                                <TableCell>number of people</TableCell>
                                <TableCell>address</TableCell>
                                <TableCell>message</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {row.eventParticipants.items.map(
                                (eventParticipant) => (
                                  <TableRow key={eventParticipant.name}>
                                    <TableCell component="th" scope="row">
                                      {eventParticipant.owner}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.email}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.weChat}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.phone}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.numberOfPeople}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.address}
                                    </TableCell>
                                    <TableCell>
                                      {eventParticipant.message}
                                    </TableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </Box>
                      </TableCell>
                    }
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.topic}</TableCell>
                    <TableCell>{row.eventStatus}</TableCell>
                  </ExpandableTableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </div>
  );
}
