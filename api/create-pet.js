export default function handleRequest(req,res){
    const body = JSON.parse(req.body)


    if (body.nombre == "Diego") {
        
        res.status(200).json(body)
    } else {
        res.status(400).json({message:"Bad request"})
    }
}