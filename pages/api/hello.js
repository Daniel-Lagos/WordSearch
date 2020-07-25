// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



//req.query consulta en la url las variable y los valores que tienen estas variables
//por ejemplo ?name=daniel,lastname=lagos esas variables las puedo colocar en el json, res.json
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
