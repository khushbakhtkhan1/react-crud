export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Fetching posts..." });
  } else if (req.method === "POST") {
    res.status(201).json({ message: "Post added." });
  } else if (req.method === "DELETE") {
    res.status(200).json({ message: "Post deleted." });
  } else if (req.method === "PUT") {
    res.status(200).json({ message: "Post updated." });
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
