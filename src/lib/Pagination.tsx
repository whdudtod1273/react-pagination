import React, { useEffect, useRef, useState } from 'react';
import './pagination.css'
import RightArrowIcon from './svg/RightArrowIcon';
import LeftArrowIcon from './svg/LeftArrowIcon';
import StartArrowIcon from './svg/StartArrowIcon';
import EndArrowIcon from './svg/EndArrowIcon';

type Props = {
  defaultData: any;
  setPost: any;
  line: number;
  showNumber: number;
  type: string;
  btnStartEnd: boolean;
}

const Pagination:React.FC<Props> = ({ defaultData = [], setPost, line = 5, showNumber = 10, type = "", btnStartEnd = false }) => {

  const [originPostData, setOriginPostData] = useState<any>();
  const [postData, setPostData] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pagelength = useRef<any>();

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

  useEffect(() => {
    setPost(defaultData.slice((currentPage - 1) * line, currentPage * line));
  }, [currentPage, defaultData, line, setPost]);

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

  const firstButtonClick = () => {
    setCurrentPage(1)
  }

  const lastButtonClick = () => {
    setCurrentPage(originPostData.length)
  }

  return (
    <>
      <div className={`rp-container ${type}`}>
        <div className={`rp-wrap`}>
          {
            btnStartEnd && (
              <div className="rp-arrow rp-firstBtnArrow" onClick={firstButtonClick}>
                <StartArrowIcon width={14} height={14} stroke={'#333'} />
              </div>
            )
          }
          <div className="rp-arrow rp-prevArrow" onClick={prevClick}>
            <LeftArrowIcon width={7} height={14} stroke={'#333'} />
          </div>
          <article className="rp-pageNumberContainer">
            {postData &&
              postData.map((post:any, index:number) => {
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
            <RightArrowIcon width={7} height={14} stroke={'#333'} />
          </div>
          {
            btnStartEnd && (
              <div className="rp-arrow rp-lastBtnArrow" onClick={lastButtonClick}>
                <EndArrowIcon width={14} height={14} stroke={'#333'} />
              </div>
            )
          }
        </div>
      </div>
      <style jsx="ture">
        {
          `
            .rp-container{display: block;width: 100%;}
            .rp-container .rp-wrap{display: flex;flex: 1;justify-content: center;}
            .rp-container .rp-wrap .rp-arrow{width: 30px;height: 30px;display: flex;justify-content: center;align-items: center;cursor: pointer;color:#424242;
              -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;
            }
            .rp-container .rp-wrap .rp-prevArrow{}
            .rp-container .rp-wrap .rp-nextArrow{}
            .rp-container .rp-wrap .rp-firstBtnArrow{margin-right: 10px;}
            .rp-container .rp-wrap .rp-lastBtnArrow{margin-left: 10px;}
            .rp-container .rp-wrap .rp-pageNumberContainer{}
            .rp-container .rp-wrap .rp-pageNumberContainer .rp-pageNumber{float: left;cursor: pointer;width: 30px;height: 30px;display: flex;justify-content: center;align-items: center;padding: 0 10px;
              -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;
            }
            .rp-container .rp-wrap .rp-pageNumberContainer .rp-pageNumber span{color:#424242;font-size: 15px;display: inline-block;line-height: 1;}
            .rp-container .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active span{font-weight: bold;}

            /* roundBox */
            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber{border: 1px solid #e0e0e0;border-radius: 5px; padding: 0;margin: 0 5px;}
            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber span{color: #757575;}
            .rp-container.roundEdge .rp-wrap .rp-arrow{border: 1px solid #e0e0e0;border-radius: 5px;}
            .rp-container.roundEdge .rp-wrap .rp-arrow.rp-prevArrow{margin-right: 5px;}
            .rp-container.roundEdge .rp-wrap .rp-arrow.rp-nextArrow{margin-left: 5px;}
            /* active */
            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active{background-color: #424242;border: 1px solid #424242;}
            .rp-container.roundEdge .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active span{color: #fff;}

            /* round */
            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber{border: 1px solid #e0e0e0;border-radius: 50%; padding: 0;margin: 0 5px;}
            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber span{color: #757575;}
            .rp-container.round .rp-wrap .rp-arrow{border: 1px solid #e0e0e0;border-radius: 50%;}
            .rp-container.round .rp-wrap .rp-arrow.rp-prevArrow{margin-right: 5px;}
            .rp-container.round .rp-wrap .rp-arrow.rp-nextArrow{margin-left: 5px;}
            /* active */
            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active{background-color: #424242;border: 1px solid #424242;}
            .rp-container.round .rp-wrap .rp-pageNumberContainer .rp-pageNumber.active span{color: #fff;}
          `
        }
      </style>
    </>
  )
}
export default Pagination