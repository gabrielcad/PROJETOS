import { Button, Paper, TextField } from '@mui/material'


export default function Form() {
  return (
    <div >
      <div>
        <Paper >
          <div style={{ display: "flex", justifyContent: "center" }}>

            <TextField id="outlined-basic" placeholder='digite a tarefa aqui ...' variant="outlined" />
            <Button variant="outlined">Adicionar</Button>

          </div >
        </Paper>

      </div>
    </div> 
      )
}