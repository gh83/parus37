import React from "react";
import axios from "axios";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

import "./price.less";
import Loader from '../ui/loader';

export default class Price extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            cols: undefined,
            rows: undefined
        };
    };

    // componentDidMount() {
    //     axios({
    //         method: "get",
    //         url: "/price/price-frezer.xlsx",
    //         responseType: "blob"
    //     })
    //         .then(({ data }) => {
    //             ExcelRenderer(data, (err, resp) => {
    //                 if (err) { console.log(err); }
    //                 else { this.setState({ cols: resp.cols, rows: resp.rows }); }
    //             });
    //         })
    //         .catch(error => console.log(error));
    // };
    async componentDidMount() {
        try {
            const response = await axios({ method: "get", url: "/price/price-frezer.xlsx", responseType: "blob" });
            ExcelRenderer(response.data, (err, resp) => {
                if (err) { console.log(err); }
                else { this.setState({ cols: resp.cols, rows: resp.rows, loading: false }); }
            });
        }
        catch (error) { console.log(error) }
    };

    render() {
        return (
            <div className="price">
                <a href="/price/price-frezer.xlsx" download>Скачать прайс лист</a>
                {this.state.loading
                    ? <Loader />
                    : (<div className='price__table'>
                        {this.state.cols !== undefined && this.state.rows !== undefined
                            ? (<OutTable
                                data={this.state.rows}
                                columns={this.state.cols}
                                tableClassName="ExcelTable2007"
                                tableHeaderRowClass="heading" />)
                            : null}
                    </div>)}
            </div>
        );
    }
};
