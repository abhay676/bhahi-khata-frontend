import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import GlobalStyle from "utils/globalStyles"

const Layout = ({children, title}) => {
    return (
        <React.Fragment>
        <GlobalStyle />
        <Helmet>
            <title lang="en">{title}</title>
            <meta name="description" content="Bhahi khata description" />
            {children}
        </Helmet>
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

export default Layout

