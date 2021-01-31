import React from 'react'
import  NewsCard  from '../NewsCard'

const NewsCards = ({ articles }) => {
    return (
        <div>
            {articles.map((article, i) => (
                <NewsCard article={article} key={i} />
            ))}
        </div>
    )
}

export default NewsCards