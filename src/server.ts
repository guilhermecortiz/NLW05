import { http } from './http';
import './websocket/client';
import './websocket/admin';

http.listen(3333, () => console.log('Server is runnig on port 3333'));
