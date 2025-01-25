import React from 'react'

function Pagination({pageNo, setPageNo}) {

    const prevNoArr=Array.from({length:3},(_,ind)=> pageNo - 1 -ind).filter((elem)=>elem>0).reverse()
    const nextNoArr=Array.from({length:4},(_,ind)=> pageNo + ind)
    const paginatonArr=[...prevNoArr,...nextNoArr]
    console.log(paginatonArr);
    
  return (
    <div className='pagination'>
        {pageNo>1 && <div onClick={()=>setPageNo(pageNo-1)} className='pageNo'>{"<"}</div>}
            {paginatonArr.map((elem,id)=>{
            return <div onClick={()=> setPageNo(elem)} key={id} className={`${elem==pageNo ? "btn-active": "pageNo" } `}>{elem}</div>
            })}
        <div onClick={()=>setPageNo(pageNo+1)} className='pageNo'>{">"}</div>
    </div>
  )
}

export default Pagination