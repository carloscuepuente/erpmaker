import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import useInputState from './hooks/useInputState';
import flightTimesByDestination from './flightTimesByDestination';

export default function TimesAndRoutes(props) {

    const [origin, setOrigin] = useInputState("SCQ");
    const [destiny, setDestiny] = useInputState("");
    const [STD, setSTD] = useInputState("");
    const [STA, setSTA] = useState("");

    const destinations = Object.keys(flightTimesByDestination);
    const dateFlight = props.dateFlight
    const addTimesAndRoutes = props.addTimesAndRoutes


    const handleChange = (event) => {
        setSTA(event.target.value)
    }

    const parseTime = (date, time) => {
        const parsedTime = moment(`${date} ${time}`, "DD-MM-YYYY HH:mm");
        return parsedTime
    };

    useEffect(() => {
        addTimesAndRoutes(origin, destiny, STD, STA)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [origin, destiny, STD, STA])


    const getSTA = (event) => {
        // setSTD(event)
        // console.log(destiny)
        // console.log(props.dateFlight)
        // console.log(moment(`${dateFlight} ${STD}`).format("YYYY/MM/DD HH:mm"))
        // console.log(parseTime(dateFlight, STD))
        // console.log(flightTimesByDestination[destiny])
        const STDParsed = parseTime(dateFlight, STD);
        const calculatedSTA = STDParsed.add(flightTimesByDestination[destiny]);
        // console.log(calculatedSTA.format("HH:mm"))
        setSTA(calculatedSTA.format("HH:mm"))
    }


    return (
        <React.Fragment>
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="origin"
                    name="origin"
                    label="Origin"
                    value={origin}
                    onChange={setOrigin}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>


            <Grid item xs={12} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="destiny-select-label">Destination</InputLabel>
                    <Select
                        labelId="destiny-select-label"
                        id="destiny-select"
                        value={destiny}
                        label="destiny"
                        onChange={setDestiny}
                    >
                        {destinations.map((dest) => {
                            return (
                                <MenuItem key={uuidv4()} value={dest}>{dest}</MenuItem>
                            )
                        })};

                    </Select>
                </FormControl>
            </Grid>



            <Grid item xs={12} sm={3}>
                <TextField
                    type="time"
                    required
                    id="STD"
                    name="STD"
                    label="STD"
                    onChange={setSTD}
                    onBlur={getSTA}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    type="time"
                    required
                    id="STA"
                    name="STA"
                    label="STA"
                    value={STA}
                    onChange={handleChange}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>


        </React.Fragment>


    )
}
