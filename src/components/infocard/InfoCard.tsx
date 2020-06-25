import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

import { Dots, UpIcon, DownIcon } from '../../assets/icons';

export interface InfoCardProps { up:boolean, title:string, value:number, percent:number} 

export default function InfoCard({title, value, percent, up}:InfoCardProps){


    const dark =  useSelector(state => state.dark);

    const theme = dark ? {
        backgroundColor: 'var(--dark)',
        color: 'var(--font-color-dark)',
        border:'1px solid var(--dark-border)'
    } :
    {
        backgroundColor: 'var(--light)',
        color: ' var(--font-color-light)',
        border:'1px solid var(--light-border)'
    }
    const {
        backgroundColor,
        color,
        border
    } = theme;

    return(
        <div className="info-card" style={{backgroundColor, border}}>
            <div className="info-card-title">
                <p style={{color}}>{ title }</p>
                <Dots></Dots>
            </div>
            <div className="info-card-data">
                <p style={{color}}>{ value} people</p>
                <div className="info-card-label">
                    <p style={{color}}> {up ? "+" : "-"} { percent } %</p>
                    {up ? <UpIcon></UpIcon> : <DownIcon></DownIcon>}
                </div>
            </div>
        </div>)
}