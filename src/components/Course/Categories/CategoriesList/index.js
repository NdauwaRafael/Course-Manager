/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React from 'react'
import CategoryChild from "./CategoryChild";

const CategoriesList = ({categories}) => {
    return (
        <div className="flex mb-4 flex-wrap -mx-4">
                {
                    categories.map(category=><CategoryChild  category={category} />)
                }

        </div>
    )
}

export default CategoriesList;