import pool from "../lib/db.js";

export const searchDoctors = async (req, res) => {
    const { location, specialist } = req.body;

    try {
        const result = await pool.query(
        `SELECT * FROM doctors 
        WHERE location ILIKE $1 
        AND specialist ILIKE $2`,
        [`%${location}%`, `%${specialist}%`]
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};