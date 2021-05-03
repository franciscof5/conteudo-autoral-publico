
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Perfil');

if (typeof this['Perfil'] == 'undefined') Perfil = {};

Perfil._path = '/janus/dwr';





Perfil.mudarProfile = function(p0, callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'mudarProfile', arguments);
};




Perfil.getRequest = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'getRequest', arguments);
};




Perfil.getResponse = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'getResponse', arguments);
};




Perfil.getSession = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'getSession', arguments);
};




Perfil.validaSessao = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'validaSessao', arguments);
};






Perfil.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'filtrarAreas', arguments);
};





Perfil.validaNivel = function(p0, callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'validaNivel', arguments);
};






Perfil.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'validaNivel', arguments);
};





Perfil.validaNivel = function(p0, callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'validaNivel', arguments);
};




Perfil.getLoginBean = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'getLoginBean', arguments);
};




Perfil.getNomsis = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'getNomsis', arguments);
};




Perfil.getSubsis = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'getSubsis', arguments);
};




Perfil.isDWRRequest = function(callback) {
return dwr.engine._execute(Perfil._path, 'Perfil', 'isDWRRequest', arguments);
};


