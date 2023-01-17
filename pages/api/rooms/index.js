import dbConnect from '../../../config/dbConnect';
import nc from 'next-connect'
import {allRooms} from '../../../controllers/roomControllers'
dbConnect();
const handler = nc();


handler.get(allRooms);

export default handler;