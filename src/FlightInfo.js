import React, { useEffect } from 'react'

import useInputState from './hooks/useInputState';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function FlightInfo(props) {

    const [flightNumber, setFlightNumber] = useInputState("");
    const [registration, setRegistration] = useInputState("");
    const [crew, setCrew] = useInputState("2/4");
    const [TOB, setTOB] = useInputState("");


    const addFlightInfo = props.addFlightInfo

    useEffect(() => {

        // console.log(flightNumber, registration, crew, TOB)
        addFlightInfo(flightNumber, registration, crew, TOB)


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flightNumber, registration, crew, TOB])


    return (
        <React.Fragment>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="flightNumber"
                    name="flightNumber"
                    label="Flight Number"
                    onChange={setFlightNumber}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="registration"
                    name="registration"
                    label="Registration"
                    onChange={setRegistration}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="crew"
                    name="crew"
                    label="Crew"
                    value={crew}
                    onChange={setCrew}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="TOB"
                    name="TOB"
                    label="TOB (Adults+inf)"
                    fullWidth
                    onChange={setTOB}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>


        </React.Fragment>
    )
}
