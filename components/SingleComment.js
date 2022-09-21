import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from '../styles/SingleComment.module.css'
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import TextField from '@mui/material/TextField';
import RepliedComment from './RepliedComment';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { AddComment } from '@mui/icons-material';
import { API } from '../global';



const commentSchema = yup.object({
  name: yup.string().required('This is a required field.'),
  comment: yup.string().required('This is a required field'),
})

export default function SingleComment({comm}) {
     
  const [replies, setReplies] = useState(comm.replies);
    
  

    const replyStyle = {
        marginLeft: '2rem',
        height: '2rem'
    }

    const nameField = {
        width: '6rem',
       
    }

    const commentField = {
        width: '12rem',
        
    }

    const [show,setShow] = useState(false);

    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
      initialValues: {
        name: '',
        comment: ''
      },
      validationSchema: commentSchema,
      onSubmit: (data, {resetForm}) => {
        addComment(data);
        resetForm();
      }
    })


    const addComment = async (data) => {
      const sent = {...data, repliedTo: comm._id, repliedToName: comm.name}
       try {
        const result = await fetch(API, {
          method: 'PUT',
          body: JSON.stringify(sent),
          "Content-type": "application/json"
        });
        
        const data = await result.json();

        if(data.sent){
          setReplies((prev)  => [...prev, data.sent]);
        }

        
       } catch (error) {
        console.log(error);
       }
    }
 
  return (
    <>
        <div className={style.singleCommentBody} >
        <div className={style.upperPortion} >
        <div className={style.name}>
         <AccountCircleIcon color='primary' />
         <p>{comm.name}</p>
         </div>
         <div>
            <p className={style.time} >{comm.commentedOn}</p>
         </div>
        </div>

        <div className={style.firstComment} >
            <p>{comm.comment}</p>
        </div>
         
         <div className={style.replies_section} >
              <Button style={replyStyle} size='small' startIcon={<ReplyIcon />}  variant='outlined' onClick={()=>setShow(!show)} >
                Reply
              </Button> 
              {show == true ? <>
                <div onSubmit={handleSubmit} >
                <form className={style.replyComment} >
                <TextField
                onChange={handleChange} onBlur={handleBlur} name='name' value={values.name} helperText={touched.name && errors.name ? errors.name : null}
                 style={nameField} label='Name' size='small' variant='outlined' />
               <TextField 
               onChange={handleChange} onBlur={handleBlur} name='comment' value={values.comment} helperText={touched.comment && errors.comment ? errors.comment : null}
               style={commentField} label='Reply' size='small' variant='outlined' />
               <Button type='submit' style={{height: '2rem'}} size='small' variant='outlined' >Add</Button>
                </form>
              </div>
              </>
               
               :
               null
               }
              
         </div>
         <div className={style.replies} >
            {replies && comm.replies ? 
              replies.map((reply, index) => {
            return <RepliedComment setReplies={setReplies} id={comm._id} key={index} reply={reply} />
           } )
            :
            null
            }
         </div>

        </div>
    </>
  )
}
