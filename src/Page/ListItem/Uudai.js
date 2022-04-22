import React from "react";
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from "antd";

class Endow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data } = this.props
        console.log(data);
        return (
            <>
                <div className="child">
                    <div className="image"><img src={data && data.image ? data.image : ""} /></div>
                    <div className="details">
                        <div>{data && data.name ? data.name : ""}</div>
                        <div>{data && data.address ? data.address : ""}</div>
                    </div>
                    <div className="reduce">Giảm giá {data && data.reduce ? data.reduce : ""}</div>
                </div>
                <div className="change">

                    <div
                        onClick={() => {
                            this.props.handleDelete(data.id)
                        }}
                    > <button className="del"> Delete </button>

                    </div>
                    <div>
                        <button className="edit">Edit</button>
                    </div>

                </div>




            </>
        )
    }

}

export default Endow;

