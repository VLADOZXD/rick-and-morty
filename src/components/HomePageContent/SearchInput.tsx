import { TextField } from "@mui/material";

interface SearchInputProps {
  onSearchInput: (searchInput: string) => void;
}

const SearchInput = ({ onSearchInput }: SearchInputProps) => {
  return (
    <TextField
      placeholder="Search a character"
      variant="outlined"
      onChange={(event) => onSearchInput(event.target.value)}
      autoComplete="off"
      sx={{
        marginBottom: 2,
        width: 1,
        borderRadius: 6,
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        backgroundColor: "#2d2d30",
        "& fieldset": { border: "none" },
        "& input": { color: "#f9f9f9", paddingLeft: 4 },
      }}
    />
  );
};

export default SearchInput;
