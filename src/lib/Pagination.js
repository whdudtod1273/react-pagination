import React, { useEffect, useRef, useState } from 'react';
import './pagination.css'
import { ReactComponent as ArrowRightIcon } from './assets/arrowRightIcon.svg'
import { ReactComponent as ArrowLeftIcon } from './assets/arrowLeftIcon.svg'

const Pagination = ({ defaultData = [], setPost, line = 5, showNumber = 10, type = "" }) => {

  const [originPostData, setOriginPostData] = useState();
  const [postData, setPostData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pagelength = useRef();

  useEffect(() => {
    pagelength.current = Math.ceil(defaultData.length / line)

    const originArray = []
    let useArray = []

    for (let i = 0; i < pagelength.current; i++) {
      originArray.push(i + 1);
    }

    for (let j = 0; j < pagelength.current; j++) {
      useArray.push(j + 1)
      if (pagelength.current < showNumber) {
        if (j + 1 === pagelength.current) {
          break;
        }
      } else {
        if (j + 1 === showNumber) {
          break;
        }
      }
    }
    setOriginPostData(originArray);
    setPostData(useArray);
  }, [defaultData.length, line, showNumber])

  const prevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % showNumber === 0) {
        setPostData(originPostData.slice(currentPage - showNumber - 1, currentPage - 1));
      }
    }
  }

  const nextClick = () => {
    if (originPostData.length > currentPage) {
      setCurrentPage(currentPage + 1);
      if (currentPage % showNumber === 0) {
        setPostData(originPostData.slice(currentPage, currentPage + showNumber));
      }
    }
  }

  useEffect(() => {
    setPost(defaultData.slice((currentPage - 1) * line, currentPage * line));
  }, [currentPage, defaultData, line, setPost]);

  return (
    <div className={`rp-container ${type}`}>
      <div className={`rp-wrap`}>
        <div className="rp-arrow rp-prevArrow" onClick={prevClick}>
          <ArrowLeftIcon width={7} height={14} stroke={'#333'} />
        </div>
        <article className="rp-pageNumberContainer">
          {postData &&
            postData.map((post, index) => {
              return (
                <div className={`rp-pageNumber ${post === currentPage ? 'active' : ''}`} key={`page-${index}`}
                  onClick={() => { setCurrentPage(post) }}>
                  <span>{post}</span>
                </div>
              )
            })
          }
        </article>
        <div className="rp-arrow rp-nextArrow" onClick={nextClick}>
          <ArrowRightIcon width={7} height={14} stroke={'#333'} />
        </div>
      </div>
    </div>
  )
}
export default Pagination