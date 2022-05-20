import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { HeroHeading } from "./Home.elements";

const Home = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8000/hero/heroes/", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        const heros = await res.json();
        console.log(heros);
        setIsLoading(false);
        setHeros(heros);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Heros data is loading...</p>;
  }
  if (heros.length === 0) {
    return <p>No heros found!</p>;
  } else {
    return <HeroList heros={heros} />;
  }
};

const HeroList = function (props) {
  return (
    <>
      <HeroHeading>Heros</HeroHeading>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Alias</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.heros.map((hero, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {hero.name}
                </TableCell>
                <TableCell>{hero.alias}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
