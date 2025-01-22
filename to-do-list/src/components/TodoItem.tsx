import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


export default function TodoItem({ value }: { value: string }) {
  const [checked, setChecked] = useState<string[]>([]); // Array de itens selecionados

  const handleToggle = () => {
    if (checked.includes(value)) {
      setChecked((prev) => prev.filter((item) => item !== value)); // Remove do array
    } else {
      setChecked((prev) => [...prev, value]); // Adiciona ao array
    }
  };

  return (
    <ListItem style={{ borderRadius: "1" }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteOutlinedIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense onClick={handleToggle}>
        <ListItemIcon >
          <Checkbox
            edge="start"
            checked={checked.includes(value)}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText />
      </ListItemButton>
    </ListItem>
  );
}
