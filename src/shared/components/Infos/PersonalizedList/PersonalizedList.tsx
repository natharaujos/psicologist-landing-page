import { List, ListItem, ListItemText } from "@mui/material";

interface IPersonalizedList {
  itensToList: string[];
}

function PersonalizedList({ itensToList }: IPersonalizedList) {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {itensToList.map((value) => (
        <ListItem key={value} disableGutters>
          <ListItemText primary={value} sx={{ color: "black" }} />
        </ListItem>
      ))}
    </List>
  );
}

export default PersonalizedList;
