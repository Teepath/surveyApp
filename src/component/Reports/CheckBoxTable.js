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



const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& td": {
      fontSize: "14px",
    },
    "& th": {
      fontSize: "18px",
      color: "#fff",
      background: color.primary
    }
  },
  container: {
    height: "auto",
  },
}));




function CheckBoxTable(props) {
    const { choices, analysis, name } = props;
    console.log(analysis)
   const classes = useStyles();
   const dispatch = useDispatch()
   const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

 

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    
  const countValue = (choice) => {
    let count = 0;
  for (let i = 0; i < analysis.length; i++){
           
    if (Object.values(analysis[i].questions)) {
        Object.values(analysis[i].questions).map(val => {
            if (val[0] === choice) {
                count = count + 1;
                console.log(val)
           }
        })
    }

    
}

return count;
}
   
  
    const chartHandle = () => {
    
    let arr = [];
    choices && choices.map((choice) => {
          arr.push({name: choice, value:countValue(choice)})
    })

    console.log(arr)
    return arr;
}

const data = chartHandle()
   
   
  if (choices && data) {
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
               
                  <TableCell
                    align="left"
                    style={{ minWidth: "50%" }}
                  >
                   Choice
                            </TableCell>
                            <TableCell

                    align="left"
                    style={{ minWidth: "50%" }}
                  >
                   Total
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "50%" }}
                  >
                   Percentage
                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row} style={{ fontSize: "2em", color: "blue" }}>
                      <TableCell align={"left"}>
                        {row.name}   
                      </TableCell>       
                      <TableCell align={"left"}>
                        {row.value}
                      </TableCell>
                      <TableCell align={"left"}>
                       { row.value >= 1? (row.value/analysis.length * 100).toFixed(2) + "%": null}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
       
       
      </Paper>
    );
  } else {
    return <div> Loading....</div>
  }
 }


export default CheckBoxTable;