


module.exports = app => {
  app.post('/api/signup', async (req,res) => {
    const {
      username,
      email,
      password
    } = req.body;
  })
}