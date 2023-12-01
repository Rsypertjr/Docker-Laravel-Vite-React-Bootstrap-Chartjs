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
    setIsChartClosed(true);
    props.resetCharts();
   }

    return(
      <>
      
          <BrowserRouter>
          <Navbar collapseOnSelect expand="lg" className="bg-info navbar navbar-expand-lg navbar-dark bg-dark w-100">              

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
              <Nav className="navbar-nav w-100">
                <LinkContainer to="/" >
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>                   
                      <i className="bi bi-x-circle" style={{color:"tomato"}}><p className="text-secondary">Reset<br/>Tables</p></i>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/" >
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>                    
                      <i className="bi bi-table" style={{color:"dodgerblue"}}><p className="text-secondary">Votes<br/>Tables</p></i>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/voteslinechart" >
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>
                      <i className="bi bi-graph-up-arrow" style={{color:"slateblue"}}><p className="text-secondary">Votes<br/>Lines Chart</p></i>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/spikeslinechart" >
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>                     
                      <i className="bi bi-graph-up-arrow" style={{color:"lightgray"}}><p className="text-secondary">Spike<br/>Line Chart</p></i>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/difflinechart">
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>  
                      <i className="bi bi-graph-up-arrow" style={{color:"orange"}}><p className="text-secondary">Diff<br/>Line Chart</p></i>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/perlinechart">
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>                    
                      <i className="bi bi-graph-up-arrow" style={{color:"violet"}}><p className="text-secondary">Percent<br/>Line Chart</p></i>
                  </Nav.Link>
                </LinkContainer>
               
                <LinkContainer to="/piechart" >
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>                       
                      <i className="bi bi-pie-chart-fill" style={{color:"green"}}><p className="text-secondary">Votes<br/>Pie Chart</p></i>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/barchart" >
                  <Nav.Link onClick={openViewer} className="text-white" href="#" style={linkStyle}>                     
                      <i className="bi bi-bar-chart-line-fill" style={{color:"azure"}}><p className="text-secondary">Votes<br/>Bar Chart</p></i>
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/binstackedchart" >
                  <Nav.Link onClick={openViewer} className="text-white" href="#"  style={linkStyle}>                     
                    <i className="bi bi-bar-chart-line-fill" style={{color:"darksalmon"}}><p className="text-secondary">Bin<br/>Stacked Chart</p></i>
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