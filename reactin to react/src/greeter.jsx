import React from "react";
import { useState } from 'react';

export const Greeter = (props) => {

    return(
        <>
            <h1>
                Hi, my name is {props.phrase}, {props.name}</h1>
        
        </>
    )
}