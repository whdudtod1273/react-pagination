import React, { useEffect, useState } from 'react';
import './pagenation.css'
const Pagenation = ({ defaultData, setPost, line }) => {

  const [originPostData, setOriginPostData] = useState();
  const [postData, setPostData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const originData = defaultData.map((item, index) => {
      item = {}
      item.pageNumber = index + 1;
      return item;
    }).filter((item) => {
      if (item.pageNumber <= Math.ceil(defaultData.length / line)) {
        return item
      }
    })

    const useData = originData.filter((item) => {
      // if (item.pageNumber < 11) {
      //   return item;
      // }
      if (Math.ceil(defaultData.length / line) <= 10) {
        if (item.pageNumber <= Math.ceil(defaultData.length / line)) {
          return item;
        }
      } else {
        if (item.pageNumber < 11) {
          return item;
        }
      }
    })

    setOriginPostData(originData);
    setPostData(useData)
  }, [defaultData, line])



  const prevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % 10 === 0) {
        setPostData(originPostData.slice(currentPage - 11, currentPage - 1));
      }
    }
  }

  const nextClick = () => {
    if (originPostData.length > currentPage) {
      setCurrentPage(currentPage + 1);
      if (currentPage % 10 === 0) {
        setPostData(originPostData.slice(currentPage, currentPage + 10));
      }
    }
  }

  useEffect(() => {
    setPost(defaultData.slice((currentPage - 1) * line, currentPage * line));
  }, [currentPage, defaultData, line, setPost]);

  return (
    <div className="rp-container">
      <div className="rp-wrap">
        <div className="rp-prevArrow" onClick={prevClick}>
          <span> {'<'} </span>
        </div>
        <article className="rp-pageNumberContainer">
          {postData &&
            postData.map((post, index) => {
              return (
                <div className={`rp-pageNumber ${post.pageNumber === currentPage ? 'active' : ''}`} key={`page-${index}`}
                  onClick={() => { setCurrentPage(post.pageNumber) }}>
                  <span>{post.pageNumber}</span>
                </div>
              )
            })
          }
        </article>
        <div className="rp-nextArrow" onClick={nextClick}>
          <span>{'>'}</span>
        </div>
      </div>
    </div>
  )
}
export default Pagenation