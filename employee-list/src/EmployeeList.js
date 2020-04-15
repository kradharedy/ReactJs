import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';


//function createData
const useStyles = makeStyles(
    {
        table: {
            minWidth:650,
        },
    }
);

function createData(Name,Job){
return {Name,Job};
}

const rows = [
createData('John','Oracle applications'),
createData('Alex','Java Developer'),
createData('Eden','Testing'),
createData('Kin','UI developer')
];

function EmployeeList(){
    const classes = useStyles();
    return (
<TableContainer>
<Table classes={classes.table}  aria-label="simple table">
<TableHead>
    <TableRow >
        <TableCell><strong>Name</strong></TableCell>
        <TableCell><strong>Job</strong></TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {rows.map((row) => (
    <TableRow key={row.Name}>
        <TableCell>{row.Name}</TableCell>
        <TableCell>{row.Job}</TableCell>
    </TableRow>
    ))}
</TableBody>
</Table></TableContainer>
);
}

export default EmployeeList;
