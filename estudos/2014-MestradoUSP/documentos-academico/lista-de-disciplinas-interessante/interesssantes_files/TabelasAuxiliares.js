
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.TabelasAuxiliares');

if (typeof this['TabelasAuxiliares'] == 'undefined') TabelasAuxiliares = {};

TabelasAuxiliares._path = '/janus/dwr';




TabelasAuxiliares.listarCPG = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'listarCPG', arguments);
};





TabelasAuxiliares.listarPrograma = function(p0, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'listarPrograma', arguments);
};




TabelasAuxiliares.listarSitReconhecimentoTitulo = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'listarSitReconhecimentoTitulo', arguments);
};








TabelasAuxiliares.alterarSitReconhecimentoTitulo = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'alterarSitReconhecimentoTitulo', arguments);
};







TabelasAuxiliares.incluirSitReconhecimentoTitulo = function(p0, p1, p2, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'incluirSitReconhecimentoTitulo', arguments);
};





TabelasAuxiliares.removerSitReconhecimentoTitulo = function(p0, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'removerSitReconhecimentoTitulo', arguments);
};






TabelasAuxiliares.listarAutonomia = function(p0, p1, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'listarAutonomia', arguments);
};








TabelasAuxiliares.inserirAutonomia = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'inserirAutonomia', arguments);
};







TabelasAuxiliares.alterarAutonomia = function(p0, p1, p2, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'alterarAutonomia', arguments);
};






TabelasAuxiliares.removerAutonomia = function(p0, p1, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'removerAutonomia', arguments);
};




TabelasAuxiliares.listarMotivoDesligamento = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'listarMotivoDesligamento', arguments);
};





TabelasAuxiliares.inserirMotivoDesligamento = function(p0, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'inserirMotivoDesligamento', arguments);
};




TabelasAuxiliares.getRequest = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'getRequest', arguments);
};




TabelasAuxiliares.getResponse = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'getResponse', arguments);
};




TabelasAuxiliares.getSession = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'getSession', arguments);
};




TabelasAuxiliares.validaSessao = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'validaSessao', arguments);
};






TabelasAuxiliares.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'filtrarAreas', arguments);
};





TabelasAuxiliares.validaNivel = function(p0, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'validaNivel', arguments);
};






TabelasAuxiliares.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'validaNivel', arguments);
};





TabelasAuxiliares.validaNivel = function(p0, callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'validaNivel', arguments);
};




TabelasAuxiliares.getLoginBean = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'getLoginBean', arguments);
};




TabelasAuxiliares.getNomsis = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'getNomsis', arguments);
};




TabelasAuxiliares.getSubsis = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'getSubsis', arguments);
};




TabelasAuxiliares.isDWRRequest = function(callback) {
return dwr.engine._execute(TabelasAuxiliares._path, 'TabelasAuxiliares', 'isDWRRequest', arguments);
};


