import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardImg, CardText, Col, Row } from 'reactstrap'
import Rendercard from './Rendercard'
import ReactLoading from "react-loading";

const Loading = () => {
    const [data, setData] = useState([])
    const [done,setDone] = useState(undefined)


    useEffect(()=>{
        setTimeout(() => {
            fetch("https://localhost:3000")
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setData(json)
                setDone(true)
            })
        },2000)
    }, [])

    return (
        <>
        {
            !done ? (
                <ReactLoading
                type={"bars"}
                color={"dark-gray"}
                height={100}
                width={100}
              />
            ) : (
                <Row>
                    {this.state.cuts.map((card) => {
                        <Col key ={data.id}>
                        <Card>
                            <CardHeader>
                                <CardText>
                                    {data.Name}
                                </CardText>
                            </CardHeader>
                            <CardImg src={data.Image} />
                            <CardBody>
                                <CardText>
                                    {data.Description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    })}

                </Row>
            )
        }
        </>
    )
}

export default Loading
