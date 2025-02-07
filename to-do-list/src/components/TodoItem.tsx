import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Paper } from "@mui/material";

interface TodoItemProps {
  value: string;
  checked: boolean; // Recebe se está marcado ou não
  onToggle: (value: string) => void; // Função para alternar o estado
  onDelete: (value: string) => void; // Função para deletar o item
}

export default function TodoItem({
  value,
  checked,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    
      <Paper bg-gray-200>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(value)}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          }
          disablePadding
          style={{ borderRadius: "50px" }}
        >
          <ListItemButton
            role={undefined}
            dense
            onClick={() => onToggle(value)}
          >
            <ListItemIcon style={{ borderRadius: "50px" }}>
              <Checkbox
                edge="start"
                checked={checked}
                tabIndex={-1}
                disableRipple
                bg-green-100
              />
            </ListItemIcon>
            <ListItemText primary={value} />
          </ListItemButton>
        </ListItem>
      </Paper>
  );
}
