import clientPromise from "../../lib/mongodb";

module.exports = async (req, res) => {
  const client = await clientPromise;
  const db = client.db("db_name");

  if (req.method === "POST") {
    const classes = await db.collection("classes").find({}).limit(10).toArray();
    return res.status(200).json({ classes });
  } else {
    res.send(
      "Hello World! This is classes api. http://localhost:3000/api/classes"
    );
  }
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
