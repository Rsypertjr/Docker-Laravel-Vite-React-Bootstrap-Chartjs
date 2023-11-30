import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import VotesLineChart2 from './Charts/VotesLineChart2';
import SpikesLineChart from './Charts/SpikesLineChart';
import DiffLineChart from './Charts/DiffLineChart';
import PerLineChart from './Charts/PerLineChart';
import PieChart from './Charts/PieChart';
import BarChart from './Charts/BarChart';
import BinStackedChart from './Charts/BinStackedChart';
import VoteTableReact from './VoteTableReact';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';



import styled from "styled-components";
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  fontSize: '0.8em'
};

export default function AppRouter(props){
  const [isChartClosed,setIsChartClosed] = useState(false);

  useEffect(() => {
    $("#navbarNav > ul > li > a").on('mouseover',function(){
      $(this).css('color','grey');
    });
    $("#navbarNav > ul > li > a").on('mouseover',function(){
      $(this).css('color','white');
    });

    $("#navbarNav > ul > li > a").on('click',function(){
      $("#navbarNav > ul > li > a").css('color','white');
      $(this).css('color','grey');
    });

  });

   function openViewer(){
    $('.chart-viewer').removeClass('hidden').removeClass('downslide').addClass('upslide');
    setChartOpen();
   }

   function setChartOpen(){
    setIsChartClosed(false);
   }

   const handleCloseChart = () => {
    $('.chart-viewer').removeClass('upslide').addClass('downslide').addClass('hidden');
    $('.chart-viewer').addClass('downslide');
    setIsChartClosed(true);
    props.resetCharts();
   }

    return(
      <>
      
          <BrowserRouter>
          <Navbar collapseOnSelect expand="lg" className="bg-info navbar navbar-expand-lg navbar-dark bg-dark">
              <Navbar.Brand href="#home" className="navbar-brand align-middle" style={{float:"left"}}>
                <span>Charts</span><i class="bi bi-arrow-90deg-right" style={{fontSize:"1.5rem",color:"darkgray",marginLeft:"0.25em"}}></i>
              </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-nav">
                <LinkContainer to="/">
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}>
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Reset Tables</span><i className="bi bi-x-circle" style={{fontSize:"1.5rem",color:"tomato"}}></i>
                      </Row>
                    </Container>           
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}> 
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Votes Tables</span><i className="bi bi-table" style={{fontSize:"1.5rem",color:"dodgerblue"}}></i>
                      </Row>
                    </Container>        
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/voteslinechart">
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}>
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Votes Lines Chart</span><i className="bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"slateblue"}}></i>
                      </Row>
                    </Container>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/spikeslinechart" >
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}> 
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Spike Line Chart</span><i className="bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"lightgray"}}></i>
                      </Row>
                    </Container>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/difflinechart" >
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}>  
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Diff Line Chart</span><i className="bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"orange"}}></i>
                      </Row>
                    </Container>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/perlinechart">
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}>
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Percent Line Chart</span><i className="bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"violet"}}></i>
                      </Row>
                    </Container> 
                  </Nav.Link>
                </LinkContainer>
               
                <LinkContainer to="/piechart">
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}> 
                      <Container>
                        <Row className="w-20 text-center" style={{float:"left"}}>
                          <span>Votes Pie Chart</span><i className="bi bi-pie-chart-fill" style={{fontSize:"1.5rem",color:"green"}}></i>
                        </Row>
                      </Container>                   
                    </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/barchart">
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#" style={linkStyle}> 
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Votes Bar Chart</span><i className="bi bi-bar-chart-line-fill" style={{fontSize:"1.5rem",color:"azure"}}></i>
                      </Row>
                    </Container>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/binstackedchart">
                  <Nav.Link onClick={openViewer} className="d-flex justify-content-center align-items-center text-white" href="#"  style={linkStyle}>  
                    <Container>
                      <Row className="w-20 text-center" style={{float:"left"}}>
                        <span>Bin Stacked Chart</span><i className="bi bi-bar-chart-line-fill" style={{fontSize:"1.5rem",color:"darksalmon"}}></i>
                      </Row>
                    </Container>
                  </Nav.Link>
                </LinkContainer>
              
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
              <Route path='/home'/>
              <Route exact path="/" element={<VoteTableReact {...props} resetCharts={props.resetCharts}  getPageNumber={props.getPageNumber} type={'table'} rightArrow={props.rightArrow} leftArrow={props.leftArrow} handleCloseChart={handleCloseChart}/>}/>
              <Route path="/voteslinechart" element={<VotesLineChart2 {...props}  resetCharts={props.resetCharts} selectResolution={props.selectResolution} getPageNumber={props.getPageNumber} type={'line'}  rightArrow={props.rightArrow} leftArrow={props.leftArrow} handleCloseChart={handleCloseChart}/>}/>
              <Route path="/spikeslinechart" element={<SpikesLineChart {...props} resetCharts={props.resetCharts}  selectResolution={props.selectResolution}  getPageNumber={props.getPageNumber} type={'line'}  rightArrow={props.rightArrow} leftArrow={props.leftArrow} handleCloseChart={handleCloseChart}/>}/>
              <Route path="/difflinechart" element={<DiffLineChart  {...props} resetCharts={props.resetCharts}  selectResolution={props.selectResolution} getPageNumber={props.getPageNumber} type={'line'}  rightArrow={props.rightArrow} leftArrow={props.leftArrow} handleCloseChart={handleCloseChart}/>}/>
              <Route path="/perlinechart" element={<PerLineChart  {...props} resetCharts={props.resetCharts}  selectResolution={props.selectResolution} getPageNumber={props.getPageNumber} type={'line'}  rightArrow={props.rightArrow} leftArrow={props.leftArrow} handleCloseChart={handleCloseChart}/>}/>
              <Route path="/piechart" element={<PieChart {...props} resetCharts={props.resetCharts}  selectResolution={props.selectResolution}  getPageNumber={props.getPageNumber} type={'pie'}  rightArrow={props.rightArrow} leftArrow={props.leftArrow}  handleCloseChart={handleCloseChart}/>}/>
              <Route path="/barchart" element={<BarChart  {...props} resetCharts={props.resetCharts}  selectResolution={props.selectResolution}  getPageNumber={props.getPageNumber} type={'bar'}  rightArrow={props.rightArrow} leftArrow={props.leftArrow} handleCloseChart={handleCloseChart}/>}/>
              <Route path="/binstackedchart" element={<BinStackedChart {...props} resetCharts={props.resetCharts}  selectResolution={props.selectResolution}  getPageNumber={props.getPageNumber} type={'bar'}  rightArrow={props.rightArrow} leftArrow={props.leftArrow} handleCloseChart={handleCloseChart}/>}/>
          </Routes>
      </BrowserRouter>
        { isChartClosed &&
          <Container className="w-100 d-flex justify-content-center p-2 pt-3" style={{backgroundColor:"lightgray"}}>
            <h4 style={{float:"left"}}>
              <span>Please select a Chart Type above</span>
              <i className="bi bi-arrow-up-square-fill" style={{marginLeft:"0.25em",marginRight:"0.25em"}}></i>
              <span>and the chart will appear here below</span><i className="bi bi-file-arrow-down-fill" style={{marginLeft:"0.25em"}}></i>
            </h4>
          </Container>
        }
      </>
        

    );
}