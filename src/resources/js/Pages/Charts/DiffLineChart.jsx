import {React, useEffect} from 'react';
import ChartPager from '../ChartPager';
import ResolutionDropdown from '../ResolutionDropdown';
import AnalyticsBar from './AnalyticsBar';
import { Container, Row, Col, Button } from 'react-bootstrap';

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
  } from 'chart.js';

  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );


  const dataLoad = {
    dateHeadersStore: [],
    dateDataBidenStore: [],
    dateDataBidenAddStore: [],
    dateDataBidenAddDiffStore: [],
    dateDataTrumpStore: [],
    dateDataTrumpAddStore: [],
    dateDataTrumpAddDiffStore: [],
    dateDataTotalStore: [],
    otherSlices: [],
    totalSlices: [],
    pieHeaders: [],
    voteBins: [],
    bin_headers: [],
    bin_biden: [],
    bin_trump: []
  };

export default function DiffLineChart(props) {


    useEffect(() => {
        let ctx = document.getElementById('myChart').getContext('2d');

        $('.page').css('background-color','rgb(239, 239, 239').css('border-color','rgb(255, 255, 255').css('border-width','3px');
        $('#page-'+ props.pageNo).css('background-color','#ffc107');

       // let data = [65, 59, 80, 81, 56, 55, 40];
        let label =  '# of Votes';
        let type = props.type;
        let selected_index = props.pageNo;

        let bgColors = ['red','orange','yellow','lime','green','teal','blue','purple'];
        let bdColors =  ['black'];

        let chartData =   props.chartData;
        let date_headers =    chartData.dateHeadersStore;
        let datedata_biden_diff_add = chartData.dateDataBidenAddDiffStore;
        let datedata_trump_diff_add = chartData.dateDataTrumpAddDiffStore;
        let datasets = [];
        let labels = date_headers[selected_index-1];

        var data1= {};
        data1.label = "Biden Gain/Loss";
        data1.backgroundColor = bgColors[0];
        data1.borderColor = bgColors[0];
        data1.data = [];
        datedata_biden_diff_add[selected_index-1].map((data) => {
            data1.data.push(data);
        });
        let dataset1 = data1;
        //alert(JSON.stringify(dataset1));

        var data2 = {};
        data2.label = "Trump Gain/Loss";
        data2.backgroundColor = bgColors[1];
        data2.borderColor = bgColors[1];
        data2.data = [];
        datedata_trump_diff_add[selected_index-1].map((data) => {
            data2.data.push(data);
        });
        let dataset2 = data2;
        //alert(JSON.stringify(dataset2));



        datasets = [dataset1, dataset2]
        //alert(JSON.stringify(datasets));


        const myChart = new Chart(ctx, {
                type: type,
                data: {
                    labels: labels,
                    datasets: datasets
                }
            });

        return () => {
          myChart.destroy()
        }

      });





    return (
        <Container className="chart-viewer">
           
            <Row>
                <Col className="w-100 d-flex justify-content-center">
                    <h3>{props.selectedState}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="w-100 d-flex justify-content-center">
                    <h4>Difference Line Chart</h4>
                </Col>
            </Row>
            <AnalyticsBar handleCloseChart={props.handleCloseChart} {...props} theResolutions={props.theResolutions} selectResolution={props.selectResolution} 
                selectAnalytics={props.selectAnalytics} chartData={props.chartData} chartType={'DiffLineChart'} />
            <Row>
                <Col className="w-100 d-flex justify-content-center">
                    <h4>Increase/Decrease of Incremental Amount of Votes</h4>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <div><canvas id="myChart"></canvas></div>
            </Row>
            <Row className="h-100 p-1 mt-3 d-flex justify-content-center">
                <ChartPager {...props} getPageNumber={props.getPageNumber} type={'line'} leftArrow={props.leftArrow} rightArrow={props.rightArrow}/>
            </Row>
        </Container>
    );

}