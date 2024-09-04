import React, { useState } from 'react';
import AdminBar from "./AdminBar";
import AdminCategory from "./AdminCategory";
export default function Admin(){
    return(<div>
        <AdminBar curentData={'home'}/>
        <AdminCategory/>
    </div>);
}
