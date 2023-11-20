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
    ['1','type one'],
    ['2','type two'],
    ['3','type three'],
    ['4','type four'],
    ['5','type five'],
];

export default function ResolutionDropdown(props){
    const[selectOption, setSelectOption ] = useState("0");
    const[selectOptions, setSelectOptions ] = useState(resolution_values);
    const[firstSelectOption, setFirstSelectOption] = useState('Select Chart Resolution');
    const[analyticsType, setAnalyticsType] = useState("none");
    const[isAvail, setIsAvail] = useState(true);
    const[title, setTitle ] = useState('');
    const[defaultResolution, setDefaultResolution] = useState(props.theResolutions[0].toString());
    const[chArray, setCHArray] = useState(props.chartData.chartArray);

    const selectedOption = (e) => {
        if(props.analytics !== 'analytics') {
            setSelectOption(e.toString());
            if(getTitle(e) == "Available" || parseInt(e) < parseInt(props.parse_resolution) ){
    
                props.selectResolution(e);
                //alert(resolution);
            }
            else {
                alert("Resolution " + e.toString() + " is not Available!");
                setSelectOption("1");
                props.selectResolution("1");
            }
        }
        else {
            setSelectOption("0");
            setAnalyticsType(e.toString());

        }
        

    }

    const Select = ({ values, onValueChange, selected}) => {
        return (
            <select
                onChange={({ target: { value }}) => onValueChange(value)}
                value=""                
            >
                <option value={parseInt(selectOption)}>{firstSelectOption}</option>
                {values.map(([value, text]) => (
                    <option key={value} selected={selected === value} value={value}>
                        {text}
                    </option>
                ))}
            </select>
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
                                    {props.analytics === 'analytics' && <p>Analytics Type {analyticsType} is chosen </p>}
                                </Col>
                            </Row>

                        </Container>
                        
                    </Col>
                    <Col className="col-2"></Col>
                </Row>

            </Container>
    );
}