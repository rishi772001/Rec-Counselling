import React from "react";
import * as XLSX from "xlsx";
import {Button} from "@material-ui/core";
import db from "../Firebase"

class ExcelToJson extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            file: "",
        };
    }

    handleClick() {
        this.refs.fileUploader.click();
    }

    filePathset(e) {
        e.stopPropagation();
        e.preventDefault();
        let file = e.target.files[0];
        console.log(file);
        this.setState({file});

        console.log(this.state.file);
    }


    readFile() {
        let f = this.state.file;
        const reader = new FileReader();

        async function upload(data) {
            if (window.confirm("Are you sure to import, Importing new record permanently deletes old data of the student")) {
                for (let i of data) {
                    if (i["rollNo"] !== "") {
                        try {
                            await db.database().ref("/students").child(i["rollNo"]).update(i);
                            console.log("yes", i["Roll No"], i)
                        } catch (err) {
                            console.log(i)
                            alert("Failed to upload, Please try again wih updated csv file");
                            break;
                        }
                    }
                }
                alert("Success")
            }
        }

        reader.onload = (evt) => {
            // evt = on_file_select event
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, {type: "binary"});
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, {header: 1});
            /* Update state */
            let convertedData = this.convertToJson(data); // shows data in json format
            upload(convertedData);
        };
        reader.readAsBinaryString(f);
    }

    convertToJson(csv) {
        let lines = csv.split("\n");

        let result = [];

        let headers = lines[0].split(",");

        for (let i = 1; i < lines.length; i++) {
            let obj = {};
            let currentline = lines[i].split(",");

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);
        }

        //return result; //JavaScript object
        return result; //JSON
    }

    render() {
        return (
            <>
                <input
                    type="file"
                    id="file"
                    ref="fileUploader"
                    onChange={this.filePathset.bind(this)}
                />
                <Button
                    variant="contained"
                    size={"small"}
                    onClick={() => {
                        this.readFile();
                    }}
                >
                    Import
                </Button>
            </>
        );
    }
}

export default ExcelToJson;