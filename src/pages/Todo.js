import React from 'react'
import { useState, useRef } from 'react'
import "../styles/Todo.scss"
import {TiDeleteOutline} from "react-icons/ti"
import {BiDetail, BiEdit} from "react-icons/bi"
import {RiCheckboxCircleFill,RiCheckboxCircleLine} from "react-icons/ri"
import {todoData} from '../helpers/todoData'
import EditTodoItem from '../components/EditTodoItem'
const Todo = () => {
    const [check,setCheck] = useState(false)
    const nameRef = useRef()

    const [listData,setListData] = useState(todoData)
    const [title,setTitle] = useState("")
    const [comment,setComment] = useState("")

    const [clickComment,setClickComment] = useState()

    const handelClickCommentMobile = (id) =>{
       if(clickComment === id) {
           setClickComment(-1)
       }
       else setClickComment(id)
    }
    const addItem = () =>{
        setListData((prev) => [...prev,{index : Math.random()*1000 + 1 ,title, comment,finish : false}])
        setTitle("")
        setComment("")
        nameRef.current.focus()
    }
    const finishItem = (id) =>{
       const newTodoList = listData.map(item => {
           if(item.id === id){
               return {...item,finish:!item.finish}
           }
           return item
        })
        setListData(newTodoList)
    }

    const editItem = (id,title,comment) =>{
        const newTodoList = listData.map(item => {
            if(item.id === id){
                return {...item,title,comment}
            }
            return item
         })
         setListData(newTodoList)
    }

    const deleteItem = (title) =>{
        let newList = listData.filter(item => item.title !== title)
        console.log(">>>Check data, ",newList )
        setListData(newList)
    }
    return (
        <div className="todo">
            <form action="#" className="todo__form">
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input ref={nameRef} type="text" value={title} onChange ={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Comment</label>
                    <textarea type="text" value={comment} onChange ={(e) => setComment(e.target.value)} />
                </div>
                <button onClick ={addItem}>Add new task</button>
            </form>
            <div className="todo__list">
                <table className="desktop__list">
                    <tr>
                        <th>Title</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                    {listData.map((item,index) => {
                        return (
                            <tr key = {index}>
                                <td>{item.title}</td>
                                <td>{item.comment}</td>
                                <td>
                                    <div className="actions">
                                        <span className="icon" onClick ={() => finishItem(item.id)}>
                                            {item.finish === false ? <RiCheckboxCircleLine /> : <RiCheckboxCircleFill className="checked"/>}
                                        </span>
                                        <span className="icon">
                                            <EditTodoItem item = {item} editItem={editItem}/>
                                            </span>
                                        <span className="icon" onClick={() => deleteItem(item.title)}><TiDeleteOutline/></span>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </table>
                <div className="mobile__list">
                    {listData.map((item,index) => {
                        return (
                            <div className="mobile__list-item">
                        <div className="leftside">
                            <span className="checkbox" onClick ={() => finishItem(item.id)}>
                                {item.finish === false ? <RiCheckboxCircleLine className="unfilled"/> : <RiCheckboxCircleFill/>}
                            </span>
                            <span>{item.title}</span>
                        </div>
                        <div className="rightside">
                            <span className="detail-icon" onClick={() => handelClickCommentMobile(item.id)}>
                                <BiDetail/>
                                {clickComment === item.id ?
                                    <p className="mobile-comment">{item.comment}</p>
                                 : ""}
                            </span>
                            <span className="icon" >
                            <EditTodoItem item = {item} editItem={editItem}/>
                                </span>
                            <span className="icon" onClick={() => deleteItem(item.title)}><TiDeleteOutline/></span>
                        </div>
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo
