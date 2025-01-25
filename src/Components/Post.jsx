import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

function Post() {

    const [data, setData] = useState([])
    const [pageNo,setPageNo]=useState(1)

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    }, [pageNo])
    

  return (
    <div className='container'>
        
        <div className='Post-container'>
                {
                    data.map((elem)=>{
                        return <div key={elem.id}>
                            <img className='img' src={elem.download_url} alt="" />
                        </div>
                    })
                }
        </div>
        <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default Post