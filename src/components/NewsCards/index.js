import React from 'react'
import { Grid, Grow } from '@material-ui/core'

import  NewsCard  from '../NewsCard'

const NewsCards = ({ articles }) => {
    return (
        <Grow in> {/* If true, show the components, triggers the enter or exit animation */}
            <Grid container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} key={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
)
}

export default NewsCards
