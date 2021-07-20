import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import * as gtag from '../lib/gtag'


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  const addToList = () => {
    gtag.event({action :"add_to_blog", 
    category : "blog", 
    label: "comment added" ,
    value: "working"

    })

  }
  
  return (
  
			
	
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>sree here!!</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        
      </section>
      <button onClick={() =>addToList()}>comment</button>
      <input type="text" id="username" placeholder="Choose Username"></input>
			<input type="password" id="password" placeholder="Choose Password"></input>
			<button type="button" onClick={() =>getInfo()}>login</button>
      <button type="button" onClick={() =>getInfo()}>logout</button>
      
    </Layout>
  )
}
var objPeople = [
	{ // Object @ 0 index
		username: "sree",
		password: "sai"
	},
	{ // Object @ 1 index
		username: "MW",
		password: "MWTEST"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}