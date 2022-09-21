import Head from 'next/head'
import Image from 'next/image'
import CommentSection from '../components/CommentSection'
import Header from '../components/Header'
import TextContent from '../components/TextContent'
import { API } from '../global'
import style from '../styles/Home.module.css'

export default function Home({comments}) {
  return (
    <>
      <div className={style.homeBody} >
      <Header/>
      <div className={style.image} >
      <Image src='/img/iphoneImage2.jpg' alt='' layout='fill' />
      </div>
      <div className={style.blogArea} >
        <TextContent/>
      </div>
      <div className={style.commentsArea} >
       <CommentSection comments={comments}/>
      </div>
      </div>
    </>
  )
}


export const getServerSideProps = async () => {
     const result = await fetch(API);
     const data = await result.json();
     return {
      props: {
        comments: data
      }
     }
}