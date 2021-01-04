import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          <a href="#about"></a>.
              디지털헬스케어센터는 Digital Therapeutics 및 그 응용과 관련된 연구를 체계적으로 수행하여 
              공학, 행동과학, 뇌신경과학, 임상, 인공지능 기반의 학제간 융합연구를 활성화하고, 
              Digital Therapeutics 데이터셋 구축 및 서비스 기술 제공을 목적으로 
              2020년 9월 1일 (규정개정) 신설된 대학 서울캠퍼스 부설 연구기관이다.
          </p>
          <p>
              > 영문명 : HYU Digital Healthcare Center, HY-DHC
          </p>
          <p>
              [역사] 2020.09.01 신설(규정개정20200901)
          </p>
          <p>
              [사업] 규정에 명시된 사업 내역(2020.09.01)
                1. Digital Therapeutics 기초 및 응용 연구를 통한 대학의 연구 경쟁력 제고 및 국제화
                2. Digital Therapeutics 관련 연구과제의 수행을 위한 정보 확보 및 연구과제의 도출
                3. 연구효율 증진을 목적으로 한 연구지원 시설의 관리 및 기타 연구자원의 운용
                4. 연구발표, 세미나 개최 및 이에 따르는 간행물 발간
                5. Digital Therapeutics 관련 학제간 융합연구를 통한 연구인력 양성
                6. 국내외 관련 연구기관과의 협력·협업 연구
                7. 기타 본 디지털헬스케어센터의 연구 목적에 필요한 사업
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'people' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">People</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            한양디지털헬스케어센터 센터장: 김형숙 교수 (심리뇌과학과, 공공정책대학원)
          </p>
          <p>
            연구원 소개가 들어가야 함.

          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Projects 소개가 들어갑니다.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
