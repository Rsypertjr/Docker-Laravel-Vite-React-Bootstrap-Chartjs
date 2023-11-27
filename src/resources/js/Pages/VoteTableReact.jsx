// resources/js/components/TableReact.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ChartPager from './ChartPager';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function AHeader(props){
    return  <th scope="col">{ props.header }</th>
}

function CloseButton(props){

    useEffect(() => {
        $('.chart-viewer').addClass('upslide');
      
    },[]);


    return (
        <Row className="h-10 m-4 d-flex justify-content-center">
            <Button variant="outline-success" onClick={props.handleCloseChart} className="viewerClose">Close Chart</Button>{' '}
        </Row>  
    );
}

function OuterTable(props){
    const headers = ["Index","Biden %","Biden Votes","Trump %","Trump Votes","Other Votes","Time Stamps","Votes", "Votes Added","Trump Added","Biden Added","% of Remaining Biden","% of Remaining Trump"];
    //const headers = ['X','Y','Z']
    return (    
        <Container>
            <Row>
                <Col className="w-100 d-flex justify-content-center">
                    <table className="w-70 table table-striped table-bordered table-responsive table-hover table-sm">
                        <thead>
                            <tr>
                                {
                                    headers.map((header) => (
                                        <AHeader key={header.toString()} header={header} />
                                    ))
                                }

                            </tr>
                        </thead>
                    {props.children}
                    </table>
                </Col>                    
            </Row>     
        </Container>
               
    );
}


export default function VoteTableReact(props)  {

       
        useEffect(() => {

            $('.page').css('background-color','rgb(239, 239, 239').css('border-color','rgb(255, 255, 255').css('border-width','3px');
            $('#page-'+ props.pageNo).css('background-color','#ffc107');

        });

        return (
        <Container className="w-100 chart-viewer">
            
            
            <Row className="mt-1">
                <Col className="w-100 d-flex justify-content-center">
                    <h3>{props.selectedState}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="w-100 d-flex justify-content-center">
                    <h4>2020 Presidential Election Votes</h4>
                </Col>
            </Row>   
           <CloseButton handleCloseChart={props.handleCloseChart}/>
            <Row>
                <Col style={{zoom:"80%"}}>
                    <OuterTable>
                        <tbody>
                            { props.theCurrentPages !== 'undefined' && props.theCurrentPages.length > 0 && props.theCurrentPages[props.pageNo-1].map(row =>
                                <tr  key={row.id.toString()}>
                                    <td>{ row.id }</td>
                                    <td>{ row.bidenj }</td>
                                    <td>{ row.biden_votes }</td>
                                    <td>{ row.trumpd }</td>
                                    <td>{ row.trump_votes }</td>
                                    <td>{ row.other_votes }</td>
                                    <td>{ row.timestamp }</td>
                                    <td>{ row.votes }</td>
                                    <td>{ row.total_vote_add }</td>
                                    <td>{ row.trump_added }</td>
                                    <td>{ row.biden_added }</td>
                                    <td>{ row.remaining_percent_biden }</td>
                                    <td>{ row.remaining_percent_trump }</td>
                                </tr>
                            )}
                        </tbody>
                    </OuterTable>
                </Col>
            </Row>    
            
            <Row className="h-100 d-flex justify-content-center">
                <ChartPager {...props} pageClick={props.getPageNumber} type={'line'} leftArrow={props.leftArrow} rightArrow={props.rightArrow}/>
            </Row>
        </Container>
        );
}