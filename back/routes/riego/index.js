var express = require('express');
var routerRiego = express.Router();
var pool = require('../../mysql');

routerRiego.post('/agregar', function (req, res) {
    pool.query('Insert into log_riegos (apertura,fecha,electrovalvulaId) values (?,?,?)', [req.body.apertura, req.body.fecha, req.body.electrovalvulaId], function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerRiego.get('/:idValvula/todas', function (req, res) {
    pool.query('Select * from log_riegos where electrovalvulaId=? order by fecha desc', [req.params.idValvula], function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerRiego;
