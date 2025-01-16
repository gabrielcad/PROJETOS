import { Button, Grid, Grid2, TextField } from '@mui/material'
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Form() {
  return (
    <div>
      <h1 >
        Lista de Tarefas
      </h1>

      <TextField id="outlined-basic" placeholder='digite a tarefa aqui ...' variant="outlined" />
      <Button variant="outlined">Outlined</Button>
      <Grid item xs={4}>
        <Typography><svg data-testid="DeleteIcon"></svg>
        </Typography>
      </Grid>
    </div>
  )
}