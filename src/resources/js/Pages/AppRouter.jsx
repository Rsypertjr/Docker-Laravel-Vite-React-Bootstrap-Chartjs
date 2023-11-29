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
import { Container, Row, Col } from 'react-bootstrap';



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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand align-middle" href="#">Select Table/Chart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#"  to="/"  style={linkStyle}>
                    <Container>
                      <Row className="text-center">Reset</Row>
                      <Row className=""><i class="d-flex justify-content-center align-items-center bi bi-x-circle" style={{fontSize:"1.5rem",color:"orange"}}></i></Row>
                    </Container>              
                  </Link>                  
                </li>
                <li className="nav-item">
                    <Link onClick={openViewer} className="nav-link align-middle" href="#"  to="/" style={linkStyle} >
                      
                      <Container>
                        <Row className="text-center">Votes Table</Row>
                        <Row className=""><i class="d-flex justify-content-center align-items-center bi bi-table" style={{fontSize:"1.5rem",color:"orange"}}></i></Row>
                      </Container>   
                    </Link>
                    
                  </li>
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#"  to="/voteslinechart"  style={linkStyle}>
                    <Container>
                      <Row className="text-center">Votes Line Chart</Row>
                      <Row className=""><i class="d-flex justify-content-center align-items-center bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"orange"}}></i></Row>
                    </Container>              
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#"  to="/spikeslinechart" style={linkStyle}>                    
                    <Container>
                      <Row className="text-center">Spikes Line Chart</Row>
                      <Row className=""><i className="d-flex justify-content-center align-items-center bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"cornflowerblue"}}></i></Row>
                    </Container>       
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#"  to="/difflinechart" style={linkStyle}>                    
                    <Container className="w-100">
                      <Row className="text-center">Diff Line Chart</Row>
                      <Row className=""><i className="d-flex justify-content-center align-items-center bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"purple"}}></i></Row>
                    </Container>    
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#"  to="/perlinechart" style={linkStyle}>
                    <Container className="w-100">
                        <Row className="text-center">Percent Line Chart</Row>
                        <Row className=""><i class="d-flex justify-content-center align-items-center bi bi-graph-up-arrow" style={{fontSize:"1.5rem",color:"yellow"}}></i></Row>
                    </Container>   
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#" to="/piechart" style={linkStyle}>                    
                    <Container className="w-100">
                        <Row className="text-center">Votes Pie Chart</Row>
                        <Row className=""><i class="d-flex justify-content-center align-items-center bi bi-pie-chart-fill" style={{fontSize:"1.5rem",color:"green"}}></i></Row>
                    </Container>   
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#"  to="/barchart" style={linkStyle}>            
                    <Container className="w-100">
                        <Row className="text-center">Votes Bar Chart</Row>
                        <Row className=""><i class="d-flex justify-content-center align-items-center bi bi-bar-chart-line-fill" style={{fontSize:"1.5rem",color:"green"}}></i></Row>
                    </Container>   
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={setChartOpen} className="nav-link align-middle" href="#"  to="/binstackedchart" style={linkStyle}>                    
                    <Container className="w-100">
                        <Row className="text-center">Bin Stacked Chart</Row>
                        <Row className=""><i class="d-flex justify-content-center align-items-center bi bi-bar-chart-line-fill" style={{fontSize:"1.5rem",color:"darksalmon"}}></i></Row>
                    </Container>   
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
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
            <h4>Please select Chart Type above and the chart will appear here</h4>
          </Container>
        }
      </>
        

    );
}