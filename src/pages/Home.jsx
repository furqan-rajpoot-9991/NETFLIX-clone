import React from 'react'
import Main2 from '../components/Main2'
import requests from '../request'
import Row from '../components/Row'


const Home = () => {
  return (
    <>

      <Main2/>
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='1' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='1' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowID='1' title='Horror' fetchURL={requests.requestHorror} />

    </>
  )
}

export default Home
