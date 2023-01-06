import React from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextareaAutosize,
  Button,
  Grid,
  TextField,
} from "@mui/material";

const Form = () => {
  return (
    <div className="w-full flex flex-col items-center bg-mate3 py-8">
      <h2 className="font-lato font-semibold text-white text-3xl py-6">
        Contacto
      </h2>
      <Grid
        container
        xs="auto"
        direction="column"
        justifyContent="center"
        alignItems="center">
        <FormControl>
          <Grid
            container
            item
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap">
            <TextField
              htmlFor="nombre"
              id="nombre"
              type="nombre"
              label="Nombre"
              variant="outlined"
              color="warning"
              margin="dense"
              required
              style={{ width: 350, margin: 16 }}
            />
          </Grid>
        </FormControl>
        <FormControl>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap">
            <TextField
              htmlFor="apellido"
              id="apellido"
              type="apellido"
              label="Apellido"
              variant="outlined"
              color="warning"
              margin="dense"
              required
              style={{ width: 350, margin: 16 }}
            />
          </Grid>
        </FormControl>
        <FormControl>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap">
            <TextField
              htmlFor="email"
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              color="warning"
              margin="dense"
              required
              style={{ width: 350, margin: 16 }}
            />
          </Grid>
        </FormControl>
        <FormControl>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap">
            <TextareaAutosize
              required
              maxRows={16}
              minRows={16}
              style={{
                width: 350,
                margin: 16,
                backgroundColor: "gray",
                color: "white",
              }}
              placeholder="Tu Mensaje"></TextareaAutosize>
          </Grid>
        </FormControl>
        <Button
          variant="outlined"
          color="warning"
          style={{ width: 350, margin: 16 }}>
          Enviar
        </Button>
      </Grid>
    </div>
  );
};

export default Form;
