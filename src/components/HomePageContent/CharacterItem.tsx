import Link from "next/link";

import { Box, Typography } from "@mui/material";

interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
}

const CharacterItem: React.FC<CharacterCardProps> = ({ id, name, status }) => {
  return (
    <Link href={`/${id}`}>
      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          borderRadius: 3,
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          padding: 1.5,
        }}
      >
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >{`Name: ${name}`}</Typography>
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          {`Status: ${status}`}
        </Typography>
      </Box>
    </Link>
  );
};

export default CharacterItem;
