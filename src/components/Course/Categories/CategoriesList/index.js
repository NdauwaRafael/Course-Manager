/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React from 'react'
import CategoryChild from "./CategoryChild";

const CategoriesList = ({categories}) => {
    return (
        <div>
                {
                    categories.map(category=><CategoryChild  category={category} />)
                }

        </div>
    )
}

export default CategoriesList;