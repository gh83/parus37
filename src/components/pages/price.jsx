import React from "react";
import axios from "axios";
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
        axios({
            method: "get",
            url: "/price/price-frezer.xlsx",
            responseType: "blob",
            data: {}
        })
            .then(({ data }) => {
                ExcelRenderer(data, (err, resp) => {
                    if (err) {
                        console.log(err);
                    } else {
                        this.setState({
                            cols: resp.cols,
                            rows: resp.rows
                        });
                        console.log(this.state.cols,'---',this.state.rows);
                    }
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div className="price">
                <a href="/price/price-frezer.xlsx" download>Скачать прайс лист</a>
                <div className='price__table'>
                    {this.state.cols !== undefined && this.state.rows !== undefined ? (
                        <OutTable
                            data={this.state.rows}
                            columns={this.state.cols}
                            tableClassName="ExcelTable2007"
                            tableHeaderRowClass="heading"
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}
