/**
 * Created by Raphael Karanja on 2019-01-31.
 */
import React from 'react'

const Spinner = (props) => {
    let children_spinners = '';
    let i = 0;
    while (i <= 12) {
        children_spinners+='<div></div>';
        i++;
    }

    return (
        <div className="lds-css ng-scope">
            <div className="lds-spinner" style="100%;height:100%">
                {children_spinners}
            </div>
        </div>
    )
}

export default Spinner;