import connect from "../../../db/connect";
import Comment from '../../../models/comment';
import { ObjectId } from "mongodb";


export default async function handler(req, res) {

    connect();

    const {method} = req;

    if(method === 'GET'){

        const result = await Comment.find({});

        res.status(200).send(result);
    }
    
    if(method === 'POST'){
        const data = req.body;
        const d = new Date();
        const time = d.toLocaleTimeString();
        const sent = {...data, commentedOn: time}
    
        const result = await Comment.create(sent);
        
        
        res.status(200).send(result);
    }


    if(method === 'PUT') {
        const data = JSON.parse(req.body);
        const d = new Date();
        const time = d.toLocaleTimeString();
        const sent = {...data, commentedOn: time}
        try {
            const id = ObjectId(data.repliedTo);

            const temp = await Comment.findOne({_id: id});

            const finalSent = {...sent, repliedToName: temp.name}
            
            const comment = await Comment.updateOne({_id:id}, 
                { $push: { replies: finalSent } });

            
            console.log('put',finalSent);
            

            res.status(200).send({result: comment, sent:sent});
        } catch (error) {
            console.log(error);
        } 
    }


} 