
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Aluno');

if (typeof this['Aluno'] == 'undefined') Aluno = {};

Aluno._path = '/janus/dwr';





Aluno.selecionarAluno = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'selecionarAluno', arguments);
};





Aluno.buscarNivelAtual = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'buscarNivelAtual', arguments);
};





Aluno.listarAtivoPorNomeFonetico = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'listarAtivoPorNomeFonetico', arguments);
};





Aluno.listarAtivoPorNomeExato = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'listarAtivoPorNomeExato', arguments);
};





Aluno.buscarAtivoPorNusp = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'buscarAtivoPorNusp', arguments);
};





Aluno.buscarOrientador = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'buscarOrientador', arguments);
};





Aluno.checarPendenciasMatricula = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'checarPendenciasMatricula', arguments);
};




Aluno.fecharAlunoSelecionado = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'fecharAlunoSelecionado', arguments);
};




Aluno.listarCursosAlunoSelecionado = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'listarCursosAlunoSelecionado', arguments);
};







Aluno.buscarSituacaoCurso = function(p0, p1, p2, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'buscarSituacaoCurso', arguments);
};







Aluno.buscarAlunoSelecionado = function(p0, p1, p2, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'buscarAlunoSelecionado', arguments);
};




Aluno.getRequest = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'getRequest', arguments);
};




Aluno.getResponse = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'getResponse', arguments);
};




Aluno.getSession = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'getSession', arguments);
};




Aluno.validaSessao = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'validaSessao', arguments);
};






Aluno.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'filtrarAreas', arguments);
};





Aluno.validaNivel = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'validaNivel', arguments);
};






Aluno.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'validaNivel', arguments);
};





Aluno.validaNivel = function(p0, callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'validaNivel', arguments);
};




Aluno.getLoginBean = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'getLoginBean', arguments);
};




Aluno.getNomsis = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'getNomsis', arguments);
};




Aluno.getSubsis = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'getSubsis', arguments);
};




Aluno.isDWRRequest = function(callback) {
return dwr.engine._execute(Aluno._path, 'Aluno', 'isDWRRequest', arguments);
};


