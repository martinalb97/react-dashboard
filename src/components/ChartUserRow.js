import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.apellido}</td>
                    <td>{props.email}</td>
                </tr>
            )
    }
    
        

export default ChartRow;