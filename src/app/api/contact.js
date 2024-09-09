export default function handler(req, res) {
    if (req.method === 'POST') {
      // Here you would typically send an email or save to a database
      // For this example, we'll just log the message and return a success response
      console.log('Received message:', req.body)
      res.status(200).json({ message: 'Message received successfully!' })
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  }