/**
 * Created by Raphael Karanja on 2019-01-31.
 */
import React from 'react'

const Spinner = (props) => {

    return (
        <div className="coursePage_loader">
            <div className="lds-css ng-scope">
                <div className="lds-spinner" >
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;