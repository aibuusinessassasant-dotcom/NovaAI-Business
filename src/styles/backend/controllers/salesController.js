const supabase = require("../config/supabase");


// GET ALL SALES
exports.getSales = async (req, res) => {

    const { data, error } = await supabase
        .from("sales")
        .select("*")
        .order("created_at", { ascending: false });


    if (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }


    res.json({
        success: true,
        data
    });

};



// CREATE SALE
exports.createSale = async (req, res) => {

    const {
        product,
        amount,
        quantity
    } = req.body;


    const { data, error } = await supabase
        .from("sales")
        .insert([
            {
                product,
                amount,
                quantity
            }
        ])
        .select();


    if (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }


    res.json({
        success: true,
        message: "Sale created successfully",
        data
    });

};



// UPDATE SALE
exports.updateSale = async (req, res) => {

    const { id } = req.params;


    const {
        product,
        amount,
        quantity
    } = req.body;


    const { data, error } = await supabase
        .from("sales")
        .update({
            product,
            amount,
            quantity
        })
        .eq("id", id)
        .select();


    if (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }


    res.json({
        success: true,
        message: "Sale updated successfully",
        data
    });

};



// DELETE SALE
exports.deleteSale = async (req, res) => {

    const { id } = req.params;


    const { error } = await supabase
        .from("sales")
        .delete()
        .eq("id", id);


    if (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }


    res.json({
        success: true,
        message: "Sale deleted successfully"
    });

};