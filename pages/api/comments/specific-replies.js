import connect from "../../../db/connect";
import Comment from '../../../models/comment';
import { ObjectId } from "mongodb";


export default async function handler (req,res) {
    const {method} = req;

    connect();

    if(method === 'GET') {
        res.status(200).send({msg: 'Hello from the new route'})
    }

    if(method === 'PUT'){
        console.log('Its here')
        console.log(req.body);
        // const data = JSON.parse(req.body);
        const data = req.body;
        const d = new Date(); 
        const time = d.toLocaleTimeString();
        const sent = {...data, commentedOn: time}
        

        try {
            const id = ObjectId(sent.arrayId);
            
            const comment = await Comment.updateOne({_id:id}, 
                { $push: { replies: sent } });

            
            console.log('put',sent);
            

            res.status(200).send({result: comment, sent:sent});
        } catch (error) {
            console.log(error);
        } 
    }

    }

