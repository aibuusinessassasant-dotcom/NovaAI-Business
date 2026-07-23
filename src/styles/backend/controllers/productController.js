const supabase = require("../config/supabase");


// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {

    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending:false });


    if(error){
        return res.status(500).json({
            success:false,
            error:error.message
        });
    }


    res.json({
        success:true,
        data
    });

};



// CREATE PRODUCT
exports.createProduct = async(req,res)=>{

    const {
        name,
        category,
        price,
        stock
    } = req.body;


    const {data,error}=await supabase
        .from("products")
        .insert([
            {
                name,
                category,
                price,
                stock
            }
        ])
        .select();


    if(error){
        return res.status(500).json({
            success:false,
            error:error.message
        });
    }


    res.json({
        success:true,
        message:"Product created successfully",
        data
    });

};



// UPDATE PRODUCT
exports.updateProduct = async(req,res)=>{

    const {id}=req.params;


    const {
        name,
        category,
        price,
        stock
    }=req.body;


    const {data,error}=await supabase
        .from("products")
        .update({
            name,
            category,
            price,
            stock
        })
        .eq("id",id)
        .select();


    if(error){
        return res.status(500).json({
            success:false,
            error:error.message
        });
    }


    res.json({
        success:true,
        message:"Product updated successfully",
        data
    });

};



// DELETE PRODUCT
exports.deleteProduct = async(req,res)=>{

    const {id}=req.params;


    const {error}=await supabase
        .from("products")
        .delete()
        .eq("id",id);


    if(error){
        return res.status(500).json({
            success:false,
            error:error.message
        });
    }


    res.json({
        success:true,
        message:"Product deleted successfully"
    });

};