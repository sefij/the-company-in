import express, { Express, Request, Response } from 'express'
import axios from 'axios'
import cors from 'cors';




const app: Express = express();
const port = 8888 //process.env.PORT;

const companyDomainUrlTemplate = 'https://company.clearbit.com/v2/companies/find?domain='
const authToken = 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49'
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());



app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/companies', async (req: Request, res: Response) => {
  const domain = req.query.domain
  if (!domain) {
    res.status(409).send('Invalid request, domain is missing')
  }
  try {
    const completeUrl = `${companyDomainUrlTemplate}${domain}`
    const axiosReq = await axios.get(completeUrl, { headers: { 'Authorization': authToken } })
    res.status(200).send(axiosReq.data);
  }
  catch (err) {
    console.error(JSON.stringify(err))
    res.status(500).send('Internal server error')
  }

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});