
import {geocodeRequest} from './geocode'
import {onRequest} from "firebase-functions/v2/https";






export const geocode = onRequest((request, response) => {
    
 geocodeRequest(request, response)
});
