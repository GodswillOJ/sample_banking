let users = [
  {
    username: "patricia",
    email: "patricia_obrien@gmail.com",
    lastName: "obrien",
    password: "pat", // In real applications, use hashed passwords
  },
]; // Temporary storage for user data with a default user

export default function handler(req, res) {
  if (req.method === "POST") {
    const { action, data } = req.body;

    if (action === "register") {
      if (users.find((user) => user.email === data.email)) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }
      users.push(data);
      return res
        .status(200)
        .json({ success: true, message: "User registered successfully" });
    }

    if (action === "login") {
      const user = users.find(
        (user) => user.username === data.username && user.password === data.password
      );
      if (user) {
        return res.status(200).json({ success: true, user });
      } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}


