/**
 * Created by Raphael Karanja on 2019-01-30.
 */
import React from 'react'

const CategoryChild = ({category}) => {
    return (
        <div className="w-1/3 px-4 mb-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={category.id}>
                <img className="w-full" src="https://via.placeholder.com/468x60?text=Course+Categories"
                     alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{category.name}</div>
                    <p className="text-grey-darker text-base">
                        {category.description}
                    </p>
                </div>
                <div className="px-6 py-4">
                    <span
                        className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
                    <span
                        className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                    <span
                        className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
                </div>
            </div>
        </div>
    )
}

export default CategoryChild;