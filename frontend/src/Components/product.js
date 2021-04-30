import React,{useState,useEffect} from 'react'
import {LinkContainer} from "react-router-bootstrap"
import axios from "axios"
import { Card } from "react-bootstrap"


const Product = (props) => {
  const [data, setData] = useState({});
  const [loading,setLoading] = useState(true);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`/api/products/${props.id}`)
              setData(res.data[0])
              setLoading(false)
          } catch (err) {
              throw new Error(err.message)
          }
      }
      fetchData();
  }, [props.id]);
  if(loading){
     return( <></>)
  }
 
  return (
    <>
      <Card style={{ width: '18rem',alignItems:'center',textAlign:'center',height:'100%',padding:'5px 10px' }}>
        <Card.Img variant="top" src={data.image} fluid='true'/>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
           {data.description}
    </Card.Text>
        </Card.Body>
        <Card.Body>
        <LinkContainer to={`/products/${data._id}`}>
        <Card.Link>More </Card.Link>
        </LinkContainer>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
