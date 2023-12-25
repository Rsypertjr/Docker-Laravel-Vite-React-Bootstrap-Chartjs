// resources/js/components/TableReact.js

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ChartPager from './ChartPager';
import { Container, Row, Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip'; 
import Button from 'react-bootstrap/Button'; 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
const headers = ["Index","Total Biden %","Total Biden Votes","Total Trump %","Total Trump Votes","Total Other Votes","Time Stamps","Total Votes", "Added Total Votes","Added Trump Votes","Added Biden Votes","% of Remaining Biden Vote","% of Remaining Trump Vote"];

function AHeader(props){
    return  <th scope="col" className="text-center" style={{width:"2em"}}>{ props.header }</th>
}

const MyTooltip = (td, index) => (
    <Tooltip className="mytooltip" id={`button-tooltip-${td}`}> 
        { headers[index] }:&nbsp;&nbsp;{ td } 
    </Tooltip>  
);

function ATd(props){
  
    return  <>
               
                <OverlayTrigger {...props}
                    delay={{ hide: 450, show: 300 }} 
                    overlay= {MyTooltip(props)}
                    placement="left" 
                > 
                    <span className="text-center text-dark fw-bolder text-hover-primary fs-6 text-break">{ props.td }</span>
                    
                </OverlayTrigger>
              </>
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
    const refLink = useRef(null);

    return (    
            <Row ref={refLink}>
                <Col className="w-100 d-flex justify-content-center">
                    <table className="w-70 table table-striped table-bordered table-responsive table-hover">
                        <thead>
                            <tr>
                                {
                                    headers.map((header) => (
                                        <AHeader key={header} header={header} />
                                    ))
                                }

                            </tr>
                        </thead>
                        <tbody>
                        { props.theCurrentPages !== 'undefined' && props.theCurrentPages.length > 0 && props.theCurrentPages[props.pageNo-1].map(row =>
                            <tr  key={row.id.toString()}>
                                {
                                    [
                                        row.id,
                                        parseFloat(row.bidenj*100).toFixed(1)+'%',
                                        parseFloat(row.biden_votes).toFixed(2),
                                        parseFloat(row.trumpd*100).toFixed(1)+'%',
                                        parseFloat(row.trump_votes).toFixed(2),
                                        parseFloat(row.other_votes).toFixed(2),
                                        row.timestamp,
                                        row.votes,
                                        row.total_vote_add,
                                        parseFloat(row.trump_added).toFixed(0),
                                        parseFloat(row.biden_added).toFixed(0),
                                        parseFloat(row.remaining_percent_biden*100).toFixed(1)+'%',
                                        parseFloat(row.remaining_percent_trump*100).toFixed(1)+'%' 
                                    ].map( (td,idx) => 
                                        
                                    <OverlayTrigger {...props}
                                        delay={{ hide: 450, show: 300 }} 
                                        overlay= {MyTooltip(td,idx)}
                                        placement="left" 
                                    > 
                                        <td className="text-center">{ td }</td>
                                        
                                    </OverlayTrigger>
                                        )
                                    
                                }
                        
                            </tr>
                        )}
                    </tbody>
                    </table>
                </Col>                    
            </Row>     
               
    );
}


export default function VoteTableReact(props)  {

       
        useEffect(() => {

            $('.page').css('background-color','rgb(239, 239, 239').css('border-color','rgb(255, 255, 255').css('border-width','3px');
            $('#page-'+ props.pageNo).css('background-color','#ffc107');  
        });

        return (
        <div className="chart-viewer" style={{width:"120%",marginLeft:"-10%",opacity:"0.90"}}> 
            
            
            <Row className="mt-1">
                <Col className="w-100 d-flex justify-content-center">
                    <h3>{props.selectedState}</h3>
                </Col>
            </Row>   
           <CloseButton handleCloseChart={props.handleCloseChart}/>
          
            <OuterTable {...props}>
                
            </OuterTable>
            
            <Row className="h-100 d-flex justify-content-center">
                <ChartPager {...props} pageClick={props.getPageNumber} type={'line'} leftArrow={props.leftArrow} rightArrow={props.rightArrow}/>
            </Row>
        </div>
        );
}