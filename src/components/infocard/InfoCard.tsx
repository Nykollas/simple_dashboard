import React from 'react';
import './style.css';
import { Dots, UpIcon, DownIcon } from '../../assets/icons';
export interface InfoCardProps { up:boolean, title:string, value:number, percent:number} 
export default function InfoCard({title, value, percent, up}:InfoCardProps){
    return(
        <div className="info-card">
            <div className="info-card-title">
                <p>{ title }</p>
                <Dots></Dots>
            </div>
            <div className="info-card-data">
                <p>{ value} people</p>
                <div className="info-card-label">
                    <p>{up ? "+" : "-"}{ percent } %</p>
                    {up ? <UpIcon></UpIcon> : <DownIcon></DownIcon>}
                </div>
                
            </div>
        </div>)
}