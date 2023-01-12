import React from 'react'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

function createData(id,name, gender, location) {
    return {id, name, gender, location };
}
const rows = [
    createData('1','user1', 'male', '123 hjhasf'),
    createData('2','user1', 'male', '123 hjhasf'),
    createData('3','user1', 'male', '123 hjhasf'),
    createData('4','user1', 'male', '123 hjhasf'),
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const ListView = () => {
    const router = useRouter();

    const handleView = (id) =>{
        router.push(`/profile/${id}`)
    }

    return (
        <div>
            <Typography variant='h5' className="listHeading">List Of Users</Typography>
            <TableContainer component={Paper}>
                <Table className="listTable" size="large" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="left" >Name</StyledTableCell>
                            <StyledTableCell align="left" >Gender</StyledTableCell>
                            <StyledTableCell align="left" >Location</StyledTableCell>
                            <StyledTableCell align="left" >View</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.gender}</TableCell>
                                <TableCell align="left">{row.location}</TableCell>
                                <TableCell align="left">    
                                <IconButton edge="end" aria-label="delete" onClick={()=>handleView(row.id)}>
                                    <VisibilityOutlinedIcon/>
                                </IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ListView





