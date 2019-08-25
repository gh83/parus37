import React from "react";
import axios from "axios";
import XLSX from "xlsx";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

import "./price.less";

export default class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cols: undefined,
      rows: undefined
    };
  }

  componentDidMount() {
    console.log("START");

    axios({
      method: "get",
      url: "/assets/price/price-frezer.xlsx",
      responseType: "blob",
      /*headers: {
        "content-type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      },*/
      data: {}
    })
      .then(({ data }) => {
        console.log(data);
        /*var workbook = XLSX.read(data, { type: "buffer" });
        console.log(workbook);*/
        ExcelRenderer(data, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            this.setState({
              cols: resp.cols,
              rows: resp.rows
            });
            console.log(this.state.cols, this.state.rows);
          }
        });
      })
      .catch(error => console.log(error));
  }

  fileHandler = event => {
    let fileObj = event.target.files[0];
    console.log(fileObj);
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });
  };
  render() {
    return (
      <div className="price">
        <a href="/assets/price/price-frezer.xlsx" download>
          Скачать прайс лист
        </a>
        <input
          type="file"
          onChange={this.fileHandler.bind(this)}
          style={{ padding: "10px" }}
        />
        {this.state.cols !== undefined && this.state.rows !== undefined ? (
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="ExcelTable2007"
            tableHeaderRowClass="heading"
          />
        ) : null}
      </div>
    );
  }
}
