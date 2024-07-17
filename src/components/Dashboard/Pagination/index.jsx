import * as React from "react";
import Pagination from "@mui/material/Pagination";
import "./styles.css"
import { Stack } from "@mui/material";

export default function PaginationControlled({page,handlePageChange}) {
  

  return (
    <Stack className="pagination-component">
      <Pagination
        count={10}
        page={page}
        onChange={(e,v)=>handlePageChange(e,v)}
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
      />
    </Stack>
  );
}
