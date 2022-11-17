import React from 'react'
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PrintIcon from '@mui/icons-material/Print';
import { Button } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// librerias
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from "file-saver";


import DateSelect from './DateSelect';
import NamesSelect from './NamesSelect';
import FlightInfo from './FlightInfo';
import TimesAndRoutes from './TimesAndRoutes';

const documento = require("./Departure-Airport-Data-Sheet-V12.Nov20.docx")

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback)
}


export default function ErpMaker() {
    const [erpInfo, setErpInfo] = useState({
        dateCompleted: "",
        dateFlight: "",
        completedBy: "",
        sendBy: "",

    })

    const addDates = (dateCompleted, dateFlight) => {
        setErpInfo({ ...erpInfo, dateCompleted, dateFlight })
    };

    const addNames = (completedBy, sendBy) => {
        setErpInfo({ ...erpInfo, completedBy, sendBy })
    };

    const addFlightInfo = (flightNumber, registration, crew, TOB) => {
        setErpInfo({ ...erpInfo, flightNumber, registration, crew, TOB })
    }

    const addTimesAndRoutes = (origin, destiny, STD, STA) => {
        setErpInfo({ ...erpInfo, origin, destiny, STD, STA })
    }
    const saveOnWord = () => {
        loadFile(documento,
            function (error, content) {
                if (error) {
                    throw error;
                }
                let zip = new PizZip(content);
                let doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });
                doc.setData({
                    dateCompleted: erpInfo.dateCompleted,
                    dateFlight: erpInfo.dateFlight,
                    completedBy: erpInfo.completedBy,
                    sendBy: erpInfo.sendBy,
                    origin: erpInfo.origin,
                    destiny: erpInfo.destiny,
                    STD: erpInfo.STD,
                    STA: erpInfo.STA,
                    flightNumber: erpInfo.flightNumber,
                    registration: erpInfo.registration,
                    crew: erpInfo.crew,
                    TOB: erpInfo.TOB
                });
                try {
                    doc.render();
                } catch (error) {
                    // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
                    function replaceErrors(key, value) {
                        if (value instanceof Error) {
                            return Object.getOwnPropertyNames(value).reduce(function (
                                error,
                                key
                            ) {
                                error[key] = value[key];
                                return error;
                            },
                                {});
                        }
                        return value;
                    }
                    console.log(JSON.stringify({ error: error }, replaceErrors));

                    if (error.properties && error.properties.errors instanceof Array) {
                        const errorMessages = error.properties.errors
                            .map(function (error) {
                                return error.properties.explanation;
                            })
                            .join('\n');
                        console.log('errorMessages', errorMessages);
                        // errorMessages is a humanly readable message looking like this :
                        // 'The tag beginning with "foobar" is unopened'
                    }
                    throw error;
                }

                let out = doc.getZip().generate({
                    type: "blob",
                    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                });
                saveAs(out, `Departure-Airport-Data-Sheet.docx`)
            })
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                ERP Maker
            </Typography>

            <Grid container spacing={3}>

                <DateSelect addDates={addDates} />

                <NamesSelect addNames={addNames} />

                <FlightInfo addFlightInfo={addFlightInfo} />

                <TimesAndRoutes
                    dateFlight={erpInfo.dateFlight}
                    addTimesAndRoutes={addTimesAndRoutes} />

                <Grid item xs={12}>
                    <Button variant="contained" onClick={saveOnWord} endIcon={<PrintIcon />}>
                        Descargar Word
                    </Button>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
