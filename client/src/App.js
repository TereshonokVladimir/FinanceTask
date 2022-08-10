import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, exchange, price, change, change_percent, dividend, clientYield, last_trade_time) {
  return { name, exchange, price, change, change_percent, dividend, clientYield, last_trade_time }
}

const rows = [
  createData("AAPL",
  "NASDAQ",
  279.29,
  64.52,
  0.84,
  0.56,
  1.34,
  "2021-04-30T11:53:21.000Z"),
  createData("GOOGL","NASDAQ",237.08,154.38,0.10,0.46,1.18,"2021-04-30T11:53:21.000Z"),
  createData("MSFT","NASDAQ",261.46,161.45,0.41,0.18,0.98,"2021-04-30T11:53:21.000Z"),
]

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Exchange</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Change percent</TableCell>
            <TableCell align="right">Dividend</TableCell>
            <TableCell align="right">Yeild</TableCell>
            <TableCell align="right">Last trade time</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.exchange}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
              <TableCell align="right">{row.change_percent}</TableCell>
              <TableCell align="right">{row.dividend}</TableCell>
              <TableCell align="right">{row.clientYield}</TableCell>
              <TableCell align="right">{row.last_trade_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
