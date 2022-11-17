import React, { useEffect } from 'react'
import { useState } from 'react';

import moment from 'moment';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function DateSelect(props) {

    const [dateCompleted, setDateCompleted] = useState();
    const [dateFlight, setDateFlight] = useState();

    const addDates = props.addDates;

    const handleDateCompletedChange = (event) => {
        let newDate = moment(event.target.value).format("DD-MM-YYYY");
        setDateCompleted(newDate)
    }

    const handleDateFlightChange = (event) => {
        let newDate = moment(event.target.value).format("DD-MM-YYYY");
        setDateFlight(newDate)
    }

    useEffect(() => {
        addDates(dateCompleted, dateFlight)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateCompleted, dateFlight])

    return (
        <React.Fragment>
            <Grid item xs={12} sm={6}>
                <TextField
                    type="date"
                    // value={dateCompleted}
                    onChange={handleDateCompletedChange}
                    required
                    id="dateCompleted"
                    name="dateCompleted"
                    label="Date Completed"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    type="date"
                    required
                    // value={dateFlight}
                    onChange={handleDateFlightChange}
                    id="dateFlight"
                    name="dateFlight"
                    label="Date of Flight"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>

        </React.Fragment>
    )
}
