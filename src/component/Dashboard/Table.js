import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { handleSurveyDelete } from "../../actions/survey";
import { FaEdit } from "react-icons/fa";
import {BiTrash } from 'react-icons/bi'
import { FaFileDownload } from "react-icons/fa";
import { FaPaste } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import moment from 'moment';
import { color } from "../../Global/color";
import Dialog  from "./Dialog";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "18px",
    alignItems: "center",
    "& td": {
      fontSize: "16px",
      "& :hover": {
        cursor: "pointer"
      }
    },
    "& th": {
      fontSize: "18px",
      color: "#fff",
      background: color.primary
    }
  },

  row: {
    fontSize:"14px"
  },
  container: {
    height: "auto",
  },
}));






 function SurveyTable({ columns, surveys, reports, surveyLength, ...props }) {
   const classes = useStyles();
   const dispatch = useDispatch()
   const [page, setPage] = React.useState(0);
   const[open, setOpen] = React.useState(false)

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleView = (id) => {
    props.history.push(`/create/view/${id}`)
  }
   const handleDelete = (id) => {
     const ask = window.confirm("Please confirm you want to delete");
     if (ask) {
       surveyLength.filter(survey => survey !== id)
       dispatch(handleSurveyDelete(id));
     }
     
   }

   
   const handleEdit = (id) => {
    props.history.push(`/create/edit/${id}`)
   }
   
   const handleAnalysis= (id) => {
    props.history.push(`/create/analysis/${id}`)
  }


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
   
   const handleCountResponse = (row) => {
     let count=0
     reports && Object.keys(reports).map(report => {
       if (reports[report].id === row) {
         count += 1;
       }     
     })
     return count;
   }

   
   const handleDuplicate = (id) => {
    const url = `https://superbi.web.app/create/view/${id}`
     navigator.clipboard.writeText(url)
     setOpen(true)
     
   }

   const handleClickOpen = (id) => {
    // setOpen(true);
    // setSelectedValue(data);
    props.history.push(`/collect/${id}`)
   };
   
   const handleClose = () => {
     setOpen(false)
   }
   
   
  if (surveyLength) {
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    align="left"
                    style={{ minWidth: "50%" }}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {surveyLength
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row} style={{ fontSize: "2em", color: "blue" }}>
                      <TableCell align={"left"}>
                        {surveys[row].json.title ? surveys[row].json.title : null}
                        
                      </TableCell>
                      <TableCell align={"left"}>
                        {moment(surveys[row].createdAt).format('L')}
                       
                      </TableCell>
                      <TableCell align={"left"}>
                      {  handleCountResponse(row)}
                      </TableCell>
                      <TableCell align={"left"}>
                        <FaEdit  onClick={()=>handleEdit(row)}/>
                      </TableCell>
                      <TableCell align={"left"}>
                        <FaFileDownload onClick={()=>handleView(row)} />
                      </TableCell>
                      <TableCell align={"left"}>
                        <FaRegChartBar  onClick={()=>handleAnalysis(row)} />
                      </TableCell>
                      <TableCell align={"left"}>
                        <FaPaste  onClick={() => handleDuplicate(row) } />
                      </TableCell>
                      <TableCell align={"left"}>
                        <FaShareAlt onClick={()=>handleClickOpen(row) }/>
                      </TableCell>
                      <TableCell align={"left"}>
                        <BiTrash onClick={(e)=> handleDelete(row)} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{fontSize:"18px"}}>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          // component="div"
          count={surveyLength?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </div>
     
        <Dialog
          open={open}
          onClose={handleClose}
        />
       
      </Paper>
    );
  } else {
    return <div> Loading....</div>
  }
 }


export default withRouter(SurveyTable);
