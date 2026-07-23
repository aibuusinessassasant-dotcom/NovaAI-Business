const supabase = require("../config/supabase");


// GET ALL CUSTOMERS
exports.getCustomers = async (req, res) => {

    const { data, error } = await supabase
        .from("customers")
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



// GET SINGLE CUSTOMER
exports.getCustomer = async(req,res)=>{

    const {id}=req.params;


    const {data,error}=await supabase
        .from("customers")
        .select("*")
        .eq("id",id)
        .single();



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




// CREATE CUSTOMER
exports.createCustomer = async(req,res)=>{


    const {name,email,phone,company}=req.body;


    const {data,error}=await supabase
        .from("customers")
        .insert([
            {
                name,
                email,
                phone,
                company
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
        message:"Customer created",
        data
    });


};




// UPDATE CUSTOMER
exports.updateCustomer = async(req,res)=>{


    const {id}=req.params;

    const {name,email,phone,company}=req.body;


    const {data,error}=await supabase
        .from("customers")
        .update({
            name,
            email,
            phone,
            company
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
        message:"Customer updated",
        data
    });


};




// DELETE CUSTOMER
exports.deleteCustomer = async(req,res)=>{

    const {id}=req.params;


    const {error}=await supabase
        .from("customers")
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
        message:"Customer deleted"
    });


};