import { Button, Paper, TextField } from '@mui/material'
import { useState } from 'react'

interface FormProps {
  value?: string;
}

export default function Form({ value = "" }: FormProps) {
  const [text, setText] = useState<string>(value);

  return (
    <div >
      <div>
        <Paper >
          <div style={{ display: "flex", justifyContent: "center" }}>

            <TextField id="outlined-basic" placeholder='digite a tarefa aqui ...' variant="outlined" onChange={(e) => setText(e.target.value)} />
            <Button variant="outlined" onClick={() => console.log(text)}>Adicionar</Button>

          </div >
        </Paper>

      </div>
    </div>
  )
}