import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">ⓒ한양디지털헬스케어센터 <a href="https://hyu.wiki/%ED%95%9C%EC%96%91%EB%94%94%EC%A7%80%ED%84%B8%ED%97%AC%EC%8A%A4%EC%BC%80%EC%96%B4%EC%84%BC%ED%84%B0"></a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
