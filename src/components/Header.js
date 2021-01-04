import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>HYU Digital healthcare center</h1>
        <p>
          {' '}<a href="https://hyu.wiki/%ED%95%9C%EC%96%91%EB%94%94%EC%A7%80%ED%84%B8%ED%97%AC%EC%8A%A4%EC%BC%80%EC%96%B4%EC%84%BC%ED%84%B0">한양디지털헬스케어센터 </a>는 Digital Therapeutics 및
          <br/> 그 응용과 관련된 연구를 체계적으로 수행하여 공학, 행동과학, 뇌신경과학, 임상, 인공지능 기반의
          <br/> 학제간 융합연구를 활성화하고, Digital Therapeutics 데이터셋 구축 및 서비스 기술을 
          <br/> 제공하기 위해 설립된 {' '}
          <a href="https://www.hanyang.ac.kr/">한양대학교 서울캠퍼스</a> 부설 연구기관입니다.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('ABOUT')
            }}
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('PEOPLE')
            }}
          >
            PEOPLE
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('PROJECTS')
            }}
          >
            PROJECTS
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
