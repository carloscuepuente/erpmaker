import React, { useEffect } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';

import useInputState from "./hooks/useInputState"

export default function NamesSelect(props) {

    const [completedBy, setCompletedBy] = useInputState("");
    const [sendBy, setSendBy] = useInputState("");

    const addNames = props.addNames

    useEffect(() => {
        // console.log(completedBy)
        // console.log(sendBy)
        addNames(completedBy, sendBy)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [completedBy, sendBy])
    return (
        <React.Fragment>

            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="completedBy-select-label">Completed by</InputLabel>
                    <Select
                        labelId="completedBy-select-label"
                        id="completedBy-select"
                        value={completedBy}
                        label="CompletedBy"
                        onChange={setCompletedBy}
                    >

                        {/* <MenuItem value={"DIEGO ALBERTO ALONSO ÁLVAREZ"}>DIEGO ALBERTO ALONSO ÁLVAREZ</MenuItem> */}
                        <MenuItem value={"ENRIQUE AYGUAVIVES OTI"}>ENRIQUE AYGUAVIVES OTI</MenuItem>
                        <MenuItem value={"GABRIEL BLANCO DURÁN"}>GABRIEL BLANCO DURÁN</MenuItem>
                        <MenuItem value={"DAVID BOO CORRAL"}>DAVID BOO CORRAL</MenuItem>
                        {/* <MenuItem value={"ALEJANDRO CASTIÑEIRAS VARELA"}>ALEJANDRO CASTIÑEIRAS VARELA</MenuItem> */}
                        <MenuItem value={"CHARLOTTE EMILY CONWAY"}>CHARLOTTE EMILY CONWAY</MenuItem>
                        <MenuItem value={"CARLOS ALBERTO CUE PUENTE"}>CARLOS ALBERTO CUE PUENTE</MenuItem>
                        <MenuItem value={"ATENEA FERNANDEZ BARREIRO"}>ATENEA FERNANDEZ BARREIRO</MenuItem>
                        <MenuItem value={"UXÍA GAIRÍ COSTA"}>UXÍA GAIRÍ COSTA</MenuItem>
                        <MenuItem value={"GIULIA GALLINA"}>GIULIA GALLINA</MenuItem>
                        <MenuItem value={"RUBEN GALVEZ LOPEZ"}>RUBEN GALVEZ LOPEZ</MenuItem>
                        <MenuItem value={"ANTTON GANZARAIN PEIRO"}>ANTTON GANZARAIN PEIRO</MenuItem>
                        <MenuItem value={"ADRIAN MACENLLE GONZALEZ"}>ADRIAN MACENLLE GONZALEZ</MenuItem>
                        <MenuItem value={"TAMARA MACENLLE GONZALEZ"}>TAMARA MACENLLE GONZALEZ</MenuItem>
                        <MenuItem value={"ALEJANDRO NEO UZAL"}>ALEJANDRO NEO UZAL</MenuItem>
                        <MenuItem value={"DANIEL ORO BARBOSA"}>DANIEL ORO BARBOSA</MenuItem>
                        <MenuItem value={"DIEGO PÉREZ BARROS"}>DIEGO PÉREZ BARROS</MenuItem>
                        <MenuItem value={"ROBERTO ELÍAS PROCOPIO PETIT"}>ROBERTO ELÍAS PROCOPIO PETIT</MenuItem>
                        <MenuItem value={"MARIA RICO PERÉZ"}>MARIA RICO PERÉZ</MenuItem>
                        <MenuItem value={"BIEITO TRIGO REGUEIRA"}>BIEITO TRIGO REGUEIRA</MenuItem>
                        <MenuItem value={"JUDITH VIQUEIRA DIAZ"}>JUDITH VIQUEIRA DIAZ</MenuItem>

                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="SendBy-select-label">Send by</InputLabel>
                    <Select
                        labelId="SendBy-select-label"
                        id="SendBy-select"
                        value={sendBy}
                        label="SendBy"
                        onChange={setSendBy}

                    >

                        {/* <MenuItem value={"DIEGO ALBERTO ALONSO ÁLVAREZ"}>DIEGO ALBERTO ALONSO ÁLVAREZ</MenuItem> */}
                        <MenuItem value={"ENRIQUE AYGUAVIVES OTI"}>ENRIQUE AYGUAVIVES OTI</MenuItem>
                        <MenuItem value={"GABRIEL BLANCO DURÁN"}>GABRIEL BLANCO DURÁN</MenuItem>
                        <MenuItem value={"DAVID BOO CORRAL"}>DAVID BOO CORRAL</MenuItem>
                        {/* <MenuItem value={"ALEJANDRO CASTIÑEIRAS VARELA"}>ALEJANDRO CASTIÑEIRAS VARELA</MenuItem> */}
                        <MenuItem value={"CHARLOTTE EMILY CONWAY"}>CHARLOTTE EMILY CONWAY</MenuItem>
                        <MenuItem value={"CARLOS ALBERTO CUE PUENTE"}>CARLOS ALBERTO CUE PUENTE</MenuItem>
                        <MenuItem value={"ATENEA FERNANDEZ BARREIRO"}>ATENEA FERNANDEZ BARREIRO</MenuItem>
                        <MenuItem value={"UXÍA GAIRÍ COSTA"}>UXÍA GAIRÍ COSTA</MenuItem>
                        <MenuItem value={"GIULIA GALLINA"}>GIULIA GALLINA</MenuItem>
                        <MenuItem value={"RUBEN GALVEZ LOPEZ"}>RUBEN GALVEZ LOPEZ</MenuItem>
                        <MenuItem value={"ANTTON GANZARAIN PEIRO"}>ANTTON GANZARAIN PEIRO</MenuItem>
                        <MenuItem value={"ADRIAN MACENLLE GONZALEZ"}>ADRIAN MACENLLE GONZALEZ</MenuItem>
                        <MenuItem value={"TAMARA MACENLLE GONZALEZ"}>TAMARA MACENLLE GONZALEZ</MenuItem>
                        <MenuItem value={"ALEJANDRO NEO UZAL"}>ALEJANDRO NEO UZAL</MenuItem>
                        <MenuItem value={"DANIEL ORO BARBOSA"}>DANIEL ORO BARBOSA</MenuItem>
                        <MenuItem value={"DIEGO PÉREZ BARROS"}>DIEGO PÉREZ BARROS</MenuItem>
                        <MenuItem value={"ROBERTO ELÍAS PROCOPIO PETIT"}>ROBERTO ELÍAS PROCOPIO PETIT</MenuItem>
                        <MenuItem value={"MARIA RICO PERÉZ"}>MARIA RICO PERÉZ</MenuItem>
                        <MenuItem value={"BIEITO TRIGO REGUEIRA"}>BIEITO TRIGO REGUEIRA</MenuItem>
                        <MenuItem value={"JUDITH VIQUEIRA DIAZ"}>JUDITH VIQUEIRA DIAZ</MenuItem>

                    </Select>
                </FormControl>
            </Grid>




        </React.Fragment>
    )
}
