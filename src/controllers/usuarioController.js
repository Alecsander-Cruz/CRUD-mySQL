const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM USUARIO', (err, usuarioRows) =>{
            if (err){
                res.json(err);
            }
            console.log(usuarioRows);
            res.render('usuario', {
                data: usuarioRows
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO USUARIO SET ?', [data], (err, usuarioRows) =>{
            console.log(usuarioRows);
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) =>{
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario WHERE UserID = ?', [id], (err, usuarioRows) =>{
            console.log(usuarioRows);
            res.render('usuario_edit', {
                data: usuarioRows[0]
            });
        });
    });
}

controller.update = (req, res) => {
    const {id} = req.params;
    const newUsuario = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuario set ? WHERE UserID = ?', [newUsuario, id], (err, usuarioRows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario WHERE UserID = ?', [id], (err, usuarioRows) =>{
            res.redirect('/');
        });
    });
};

module.exports = controller;