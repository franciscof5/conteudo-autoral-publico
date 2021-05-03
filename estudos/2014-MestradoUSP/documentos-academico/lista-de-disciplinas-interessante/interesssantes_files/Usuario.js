
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Usuario');

if (typeof this['Usuario'] == 'undefined') Usuario = {};

Usuario._path = '/janus/dwr';







Usuario.alterarSenha = function(p0, p1, p2, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'alterarSenha', arguments);
};






Usuario.listarAreasDePerfilSecundario = function(p0, p1, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'listarAreasDePerfilSecundario', arguments);
};




Usuario.listarUsuariosComDuploPerfis = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'listarUsuariosComDuploPerfis', arguments);
};





Usuario.listarPerfisSecundarios = function(p0, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'listarPerfisSecundarios', arguments);
};





Usuario.buscarNivelPrincipal = function(p0, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'buscarNivelPrincipal', arguments);
};





Usuario.listarPerfisFaltantes = function(p0, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'listarPerfisFaltantes', arguments);
};






Usuario.removerPerfil = function(p0, p1, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'removerPerfil', arguments);
};









Usuario.incluirAreas = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'incluirAreas', arguments);
};









Usuario.removerAreas = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'removerAreas', arguments);
};






Usuario.incluirPerfil = function(p0, p1, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'incluirPerfil', arguments);
};




Usuario.getRequest = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'getRequest', arguments);
};




Usuario.getResponse = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'getResponse', arguments);
};




Usuario.getSession = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'getSession', arguments);
};




Usuario.validaSessao = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'validaSessao', arguments);
};






Usuario.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'filtrarAreas', arguments);
};





Usuario.validaNivel = function(p0, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'validaNivel', arguments);
};






Usuario.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'validaNivel', arguments);
};





Usuario.validaNivel = function(p0, callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'validaNivel', arguments);
};




Usuario.getLoginBean = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'getLoginBean', arguments);
};




Usuario.getNomsis = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'getNomsis', arguments);
};




Usuario.getSubsis = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'getSubsis', arguments);
};




Usuario.isDWRRequest = function(callback) {
return dwr.engine._execute(Usuario._path, 'Usuario', 'isDWRRequest', arguments);
};


