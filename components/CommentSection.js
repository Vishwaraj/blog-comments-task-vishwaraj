import React, { useState } from 'react'
import style from '../styles/CommentSection.module.css';
import SingleComment from './SingleComment';
import { Button, TextField } from '@mui/material';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { API } from '../global';
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';


const newCommentSchema = yup.object({
  name: yup.string().required('This is a required field'),
  comment: yup.string().required('This is a required field')
})

export default function CommentSection({comments}) {

  const [commentState, setCommentState] = useState(comments);

  const nameStyle ={
    width: '5rem'
  }

  const commentStyle = {
    width: '15rem'
  }

  const [show, setShow] = useState(false);

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} = useFormik({
    initialValues: {
      name: '',
      comment: ''
    },
    validationSchema: newCommentSchema,
    onSubmit: (data, {resetForm}) => {

      postNewComment(data);
      resetForm();
    }
  })


  const postNewComment = async (comment) => {

    try {
      const result = await fetch(API, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json"
        }
      });

      const data = await result.json();
      console.log(data);
      setCommentState((prev) => [...prev, data])
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <>
        <div className={style.commentsBody} >
        <h1 className={style.title} >Comments</h1>
        <div className={style.comment_list} >
        {commentState.map((comm) => {
          return <SingleComment key={comm._id} comm={comm} />
        })}
        
        </div>
        <div className={style.addNewComment} >
        <Button onClick={()=>setShow(!show)} size='small' variant='outlined'>Write a Comment</Button>
        {show ? <>
          <div>
          <form onSubmit={handleSubmit} className={style.newCommentForm} >
            <TextField 
            onChange={handleChange} onBlur={handleBlur} name='name' value={values.name} helperText={touched.name && errors.name ? errors.name : null}
            style={nameStyle} variant='standard' label='Name' />
            <TextField 
            onChange={handleChange} onBlur={handleBlur} name='comment' value={values.comment} helperText={touched.comment && errors.comment ? errors.comment : null}
            style={commentStyle} variant='standard' label='Comment' />
            <Button type='submit' size='small' variant='outlined' >Add</Button>
          </form>
        </div>
        </>
         :
         null
         }
        
        </div>
        
        </div>
    </>
  )
}
