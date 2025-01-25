import React from 'react'

function Pagination({pageNo, setPageNo}) {
  return (
    <div className='pagination'>
        {pageNo>1 && <div onClick={()=>setPageNo(pageNo-1)} className='pageNo'>{"<"}</div>}
        <div className='pageNo'>{pageNo}</div>
        <div onClick={()=>setPageNo(pageNo+1)} className='pageNo'>{">"}</div>
    </div>
  )
}

export default Pagination