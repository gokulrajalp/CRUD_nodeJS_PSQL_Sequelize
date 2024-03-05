const Models = require('../models');


const UserController =  {

    renderUser: (req, res) => {
        res.render('index');
    },

    renderUserDetails : async (req, res) => {
        try {
            const users = await Models.User.findAll();
            res.render('userDetails', {users});
          } catch (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
          }
    },

    renderEdit : async (req, res) => {
        try{
            const users = await Models.User.findAll();
            res.render('userEdit', {users});
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    },

    renderAddDetails  : async (req, res) => {
        try{
            res.render('add');
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    },



    handleAddDetails: async (req, res) => {
        const { name, email, role, password } = req.body;
    
        try {
    
          const newUser = await Models.User.create({
            name,
            email,
            password,
            role
          });
    
          res.redirect('/user');
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        }
      },



      renderEdit: async (req, res) => {
        const userId = req.params.id;
    
        try {
          const user = await Models.User.findByPk(userId);
    
          if (!user) {
            return res.status(404).send('User not found');
          }
    
          res.render('edit', { user });
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        }
      },



      handleEditUser: async (req, res) => {
        const { userId, name, email, role, password } = req.body;
        try {
          const user = await Models.User.findByPk(userId);
    
          if (!user) {
            return res.status(404).send('User not found');
          }
    
          user.name = name;
          user.email = email;
          user.role = role;
          user.password = password;
    
          await user.save();
          res.redirect('/user');
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        }
      },



    deleteUser: async (req, res) => {
        const userId = req.params.id;
    
        try {
          const user = await Models.User.findByPk(userId);
          if (!user) {
            return res.status(404).send('User not found');
          }
          await user.destroy();
          res.redirect('/user');
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        }
      },



}

module.exports = UserController;