/**
 * Created by Raphael Karanja on 2019-01-19.
 */
import React, {Component} from 'react';
export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses: [],
            course: {
                title: null
            }
        }
    }
}