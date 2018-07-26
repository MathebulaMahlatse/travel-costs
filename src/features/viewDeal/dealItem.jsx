import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ChevronRight from '@material-ui/icons/ChevronRight';
import AirportShuttle from '@material-ui/icons/AirportShuttle';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: '1em',
        padding: '1em',
        backgroundColor: '#CACFD2'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    svg: {
        fontSize: '20px'
    },
    right: {
        marginLeft: 'auto'
    },
    tripText: {
        fontWeight: 'bold',
        padding: '0.1em'
    },
    textPadding: {
        padding: '0.1em',
        fontStyle: 'italic'
    }
  });


const DealItem = props => {
    return (
        <Paper className={props.classes.root}>
            <div className={props.classes.flexRow}>
                <div className={props.classes.tripText}>{props.departure}</div>
                <ChevronRight className={props.classes.svg}/>
                <div className={props.classes.tripText}>{props.destination}</div>
                <div className={`${props.classes.right} ${props.classes.tripText}`}>{props.amount}</div>
            </div>

            <div className={`${props.classes.flexRow} ${props.classes.textPadding}`}>
                <AirportShuttle className={props.classes.svg}/>
                <div>{props.reference}</div>
                <div>for</div>
                <div>{props.time}</div>
            </div>
        </Paper>
    );
}

export default withStyles(styles) (DealItem);