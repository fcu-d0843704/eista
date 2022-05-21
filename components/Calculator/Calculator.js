import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/Calculator.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    width: '85%',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 1,
    label: '1片',
  },
  {
    value: 100,
    label: '100片',
  },
  {
    value: 200,
    label: '200片',
  },
  {
    value: 300,
    label: '300片',
  },
  {
    value: 400,
    label: '400片',
  },
];

const CustomSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
    padding: '5px',
  },
  thumb: {
    height: 26,
    width: 26,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -6,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 15,
    borderRadius: 15,
  },
  rail: {
    height: 15,
    borderRadius: 15,
  },
})(Slider);

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {
    const [amoung, setAmoung] = useState(15000); 
    const classes = useStyles();

    const getValue = (e, value) => {
        setAmoung(value * 15000);
    }

    return (
        <div className={styles.profit_pannel}>
            <h1>出資太陽能板金額: {amoung.toLocaleString('en-US')} 元</h1>
            <div className={classes.root}>
                <CustomSlider
                    max={400} 
                    defaultValue={1}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    step={1}
                    marks={marks}
                    valueLabelDisplay="on"
                    onChange={getValue}
                />
            </div>
            <p>預估20年收益</p>
            <div className={styles.detail_views}>
                <div className={styles.detail_box}>
                    <h1>現金收益</h1>
                    <h2>100</h2>
                </div>
                <div className={styles.divider} />
                <div className={styles.detail_box}>
                    <h1>環境減碳</h1>
                    <h2>100</h2>
                </div>
            </div>
            <p>※ 此估算僅為參考，陽光伏特家不保證收益</p>
        </div>
    );
}
