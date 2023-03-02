import  axios  from 'axios'
import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function List() {

    const[apiData,setApiData]=useState([])

    function getData(){
        axios.get("https://machine-test.cloudmlmdemo.com/api/admin/tool-documents")
        .then((response)=>{
            setApiData(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    function handleDelete(id){
        axios.delete("https://machine-test.cloudmlmdemo.com/api/admin/tool-documents/${id}")
        .then(()=>{
            getData();
        }).catch((err)=>{
            console.log(err);
        })
    }

    function setDataToStorage(id,title,sort_order,doc_url,created_at){
        localStorage.setItem('id',id);
        localStorage.setItem('title',title)
        localStorage.setItem('sort_order',sort_order)
        localStorage.setItem('doc_url',doc_url)
        localStorage.setItem('created_at',created_at)

    }
    useEffect(()=>{
        getData()
    },[])



  return (
<>
        <div className='row'>
    <div className='col-md-12'>
        <div className='mb-2 mt-2'>
            <Link to='/create'>
                <Button>Create new data</Button>
            </Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>File Title</th>
                    <th>Sort Order</th>
                    <th>Download</th>
                    <th>Created</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {apiData.map((item)=>{
                    return(
                        <>
<tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
    
                            <td>{item.sort_order}</td>
                            <td>{item.doc_url}</td>
                            <td>{item.created_at}</td>
</tr>

                        </>
                    )
                })}
            </tbody>
        </table>
    </div>
        </div>
</>
  )
}


export default List
