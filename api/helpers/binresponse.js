class BinResponse{
    constructor(content_type, context){
        this.statusCode = 200;
        this.headers = {'Access-Control-Allow-Origin' : '*', 'Content-Type': content_type };
        this.isBase64Encoded = true;
        if( context )
            this.set_body(context);
        else
            this.body = "";
    }

    set_error(error){
        this.body = JSON.stringify({"err": error});
        return this;
    }

    set_body(content){
        this.body = content.toString('base64');       
        return this;
    }
    
    get_body(){
        return Buffer.from(this.body, 'base64');
    }
}

module.exports = BinResponse;
