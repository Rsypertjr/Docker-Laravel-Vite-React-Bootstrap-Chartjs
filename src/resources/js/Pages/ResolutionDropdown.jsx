import {React, useEffect, useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Button, Tooltip, Container, Row, Col } from 'react-bootstrap';

const resolution_values = [
    ['1','one'],
    ['2','two'],
    ['3','three'],
    ['4','four'],
    ['5','five'],

];

const analytic_values = [
    ['1','High to Low'],
    ['2','Largest Difference'],
    ['3','No Analytics'],
    ['4','No Analytics']
];

export default function ResolutionDropdown(props){
    const[selectOption, setSelectOption ] = useState("0");
    const[selectOptions, setSelectOptions ] = useState(resolution_values);
    const[selectionMade, setSelectionMade ] = useState("Please Select Here");
    const[firstSelectOption, setFirstSelectOption] = useState('Select Chart Resolution');
    const[analyticsType, setAnalyticsType] = useState("none");
    const[isAvail, setIsAvail] = useState(true);
    const[title, setTitle ] = useState('');
    const[defaultResolution, setDefaultResolution] = useState(props.theResolutions[0].toString());
    const[chArray, setCHArray] = useState(props.chartData.chartArray);

    const selectedAnalytic = (e) => {
        
        let text = e.target.text;
        setSelectionMade(text);
        console.log("Selected Text:", text);
        let index = resolution_values.filter(values => {
            return values[1] === text;
        }).map(item => {return item[0].toString();});
        console.log("Selected Index:", index);

        setSelectOption(index);
        if(props.analytics !== 'analytics') {
            
            if(getTitle(index) == "Available" || parseInt(index) < parseInt(props.parse_resolution) ){
    
                props.selectResolution(index);
                //alert(resolution);
            }
            else {
                alert("Resolution " + index.toString() + " is not Available!");
                setSelectOption("1");
                props.selectResolution("1");
            }
        }
        else {
            let selection = index;
            let textholder = analytic_values.filter(values => {
                return values[0] === selection;
            }).map(item => {return item[1].toString();});
            console.log('Text Holder', textholder);
            setSelectionMade(textholder);
            props.selectAnalytics(textholder, props.chartData, props.chartType);
            setAnalyticsType(textholder);

        }
        

    }

    const selectedOption = (e) => {
        
        
        console.log("Selected Text:", e);
       

        setSelectOption(e.toString());
        if(props.analytics !== 'analytics') {
            
            if(getTitle(e.toString()) == "Available" || parseInt(e.toString()) < parseInt(props.parse_resolution) ){
    
                props.selectResolution(e.toString());
                //alert(resolution);
            }
            else {
                alert("Resolution " + e.toString() + " is not Available!");
                setSelectOption("1");
                props.selectResolution("1");
            }
        }
        else {
            let selection = e.toString();
            let textholder = analytic_values.filter(values => {
                return values[0] === selection;
            }).map(item => {return item[1].toString();});
            console.log('Text Holder', textholder);

            props.selectAnalytics(textholder, props.chartData, props.chartType);
            setAnalyticsType(textholder);

        }
        

    }

    const Select = ({ values, onValueChange, selected}) => {
        return (
            <Container>
                <Row>
                    <h4 className="d-flex justify-content-center rounded p-1" style={{backgroundColor:"lightblue"}}>{firstSelectOption}</h4>
                </Row>
                <Row>
                    <select
                        onChange={({ target: { value }}) => onValueChange(value)}
                    >
                        <option value={parseInt(selectOption)} >{ selectionMade }</option>
                        {values.map(([value, text]) => (
                            <option key={value} selected={selected === value} value={value}>
                                {text}
                            </option>
                        ))}
                    </select>
                </Row>
                
            </Container>
           
        );
    };


   
    

    const getTitle = useCallback((res) => {
            let test = (parseInt(props.pageNo)-1)*10*parseInt(res)+parseInt(res);

            if(parseInt(test) <=  props.theVotes.length)
                return "Available";
            else
                return "Not Available";
    });

    useEffect(() => {

        $('[data-toggle="tooltip"]').tooltip();
       // setResolution(props.parse_resolution);
        if(props.analytics !== null && props.analytics === 'analytics'){
            setSelectOptions(analytic_values);
            setFirstSelectOption('Select Analyics Type');
            setSelectOption("0");
        }

    },[]);

    return(

            <Container className='resolution'>
                <Row>
                    <Col className="col-2" ></Col>
                    
                    
                   
                    <Col className="col-8 d-flex justify-content-center" style={{fontSize:"1.5em"}}>                      
                        <Container >
                            <Row className="w-100">
                                <Col className="col-12 d-flex justify-content-center">
                                    <Select
                                        values={selectOptions}
                                        selected={selectOption}
                                        onValueChange={selectedOption}
                                        className="w-100"
                                    />
                                   
                                </Col>

                                
                            </Row>
                            
                            <Row className="w-100 mt-2">
                                <Col className="col-12 d-flex justify-content-center">                        
                                    {typeof(props.analytics) === "undefined" && <p>Resolution (data point multiplier) is {selectOption} </p>}  
                                    {props.analytics === 'analytics' && <p>Analytics Type is <font color="blue">{analyticsType}</font></p>}
                                </Col>
                            </Row>

                        </Container>
                        
                    </Col>
                    <Col className="col-2"></Col>
                </Row>

            </Container>
    );
}