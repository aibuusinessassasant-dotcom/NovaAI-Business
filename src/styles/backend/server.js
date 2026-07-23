
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const supabase = require("./config/supabase");
const aiBusinessRoutes = require("./routes/aiBusinessRoutes");
// ROUTES
const customerRoutes = require("./routes/customerRoutes");
const salesRoutes = require("./routes/salesRoutes");
const productRoutes = require("./routes/productRoutes");
const aiRoutes = require("./routes/aiRoutes"); // ✅ KU DAR

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// API ROUTES
app.use("/api/ai-business", aiBusinessRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/products", productRoutes);
app.use("/api/ai", aiRoutes); // ✅ KU DAR

// HOME
app.get("/", (req, res) => {
    res.json({
        message: "AI Business Assistant Backend Running 🚀"
    });
});

// SUPABASE TEST
app.get("/test-supabase", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("customers")
            .select("*")
            .limit(1);

        if (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            });
        }

        res.json({
            success: true,
            message: "Supabase Connected Successfully",
            data
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});