export const errorHandler = (req, res, next) => {
    console.error("Internal Server Error");
    res.status(500).json({ Error: "Internal Server Error" });
}
