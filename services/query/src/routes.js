import combineRouters from 'koa-combine-routers';
import APIRouter from './controllers/API';
import QueryRouter from './controllers/Query';


export default combineRouters(
  APIRouter,
  QueryRouter
)