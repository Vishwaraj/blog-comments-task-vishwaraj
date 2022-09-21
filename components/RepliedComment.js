import React, {useState} from 'react'
import style from '../styles/RepliedComment.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import * as yup from 'yup';



const commentSchema = yup.object({
    name: yup.string().required('This is a required field.'),
    comment: yup.string().required('This is a required field'),
  })

export default function RepliedComment({reply, id, setReplies}) {


    const d = new Date();
    const time = d.toLocaleTimeString();
    
    const replyStyle = {
        marginLeft: '2rem',
        height: '2rem'
    }

    const nameField = {
        width: '6rem'
    }

    const commentField = {
        width: '8rem'
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

    const url = 'http://localhost:3000/api/comments/specific-replies';

    const addComment = async (data) => {
      const sent = {...data, repliedToName: reply.name, arrayId:id}
       try {
        const result = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(sent),
          headers: {
            "Content-type": "application/json"
          }
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
         <p className={style.repliedToName} >Replying to {reply.repliedToName}`s comment</p>
        <div className={style.upperPortion} >
        <div className={style.name}>
         <AccountCircleIcon color='primary' />
         <p>{reply.name}</p>
         </div>
         <div>
            <p className={style.time} >{reply.commentedOn}</p>
         </div>
        </div>

        <div className={style.firstComment} >
            <p>{reply.comment}</p>
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

        </div>
    </>
  )
}
