import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.short_description}</td>
                    <td>{props.price}</td>
                </tr>
            )
    }
    
        

export default ChartRow;