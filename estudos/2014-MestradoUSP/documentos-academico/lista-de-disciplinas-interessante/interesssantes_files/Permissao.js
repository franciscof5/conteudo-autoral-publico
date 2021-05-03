
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.Permissao');

if (typeof this['Permissao'] == 'undefined') Permissao = {};

Permissao._path = '/janus/dwr';




Permissao.getNivel = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getNivel', arguments);
};




Permissao.isAluno = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'isAluno', arguments);
};




Permissao.listarCPG = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'listarCPG', arguments);
};





Permissao.listarPrograma = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'listarPrograma', arguments);
};





Permissao.listarArea = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'listarArea', arguments);
};






Permissao.isSecretarioCPG = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'isSecretarioCPG', arguments);
};




Permissao.buscarPermissoesNegadas = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'buscarPermissoesNegadas', arguments);
};






Permissao.removerUsuarioDeGrupo = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'removerUsuarioDeGrupo', arguments);
};







Permissao.incluirUsuarioEmGrupo = function(p0, p1, p2, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'incluirUsuarioEmGrupo', arguments);
};






Permissao.salvarPermissaoGrupo = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'salvarPermissaoGrupo', arguments);
};






Permissao.carregarPermissoesBasicasPorUsuario = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'carregarPermissoesBasicasPorUsuario', arguments);
};





Permissao.carregarPermissoesBasicasPorGrupo = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'carregarPermissoesBasicasPorGrupo', arguments);
};






Permissao.salvarPermissoesMenu = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'salvarPermissoesMenu', arguments);
};







Permissao.salvarPermissoesPagina = function(p0, p1, p2, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'salvarPermissoesPagina', arguments);
};







Permissao.salvarPermissoesItem = function(p0, p1, p2, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'salvarPermissoesItem', arguments);
};





Permissao.carregarPermissoesMenuPorGrupo = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'carregarPermissoesMenuPorGrupo', arguments);
};






Permissao.carregarPermissoesMenuPorUsuario = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'carregarPermissoesMenuPorUsuario', arguments);
};







Permissao.carregarPermissoesItensPorUsuario = function(p0, p1, p2, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'carregarPermissoesItensPorUsuario', arguments);
};






Permissao.carregarPermissoesItensPorGrupo = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'carregarPermissoesItensPorGrupo', arguments);
};






Permissao.carregarPermissoesPaginas = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'carregarPermissoesPaginas', arguments);
};






Permissao.buscaAreasPorUsuario = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'buscaAreasPorUsuario', arguments);
};





Permissao.buscaAreasPorGrupo = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'buscaAreasPorGrupo', arguments);
};





Permissao.buscaUsuariosPorGrupo = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'buscaUsuariosPorGrupo', arguments);
};





Permissao.alunoAtivoPorNomeFonetico = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'alunoAtivoPorNomeFonetico', arguments);
};





Permissao.alunoAtivoPorNomeExato = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'alunoAtivoPorNomeExato', arguments);
};





Permissao.alunoAtivoPorNusp = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'alunoAtivoPorNusp', arguments);
};





Permissao.pessoaPorNomeExato = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'pessoaPorNomeExato', arguments);
};





Permissao.pessoaPorNomeFonetico = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'pessoaPorNomeFonetico', arguments);
};





Permissao.pessoaPorNusp = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'pessoaPorNusp', arguments);
};





Permissao.usuarioPorNomeFonetico = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'usuarioPorNomeFonetico', arguments);
};






Permissao.usuarioPorNusp = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'usuarioPorNusp', arguments);
};





Permissao.usuarioPorNomeExato = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'usuarioPorNomeExato', arguments);
};





Permissao.orientadorPorNomeFonetico = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'orientadorPorNomeFonetico', arguments);
};





Permissao.orientadorPorNusp = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'orientadorPorNusp', arguments);
};





Permissao.orientadorPorNomeExato = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'orientadorPorNomeExato', arguments);
};






Permissao.salvarPermissoesBasicas = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'salvarPermissoesBasicas', arguments);
};




Permissao.getRenderBean = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getRenderBean', arguments);
};




Permissao.getRequest = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getRequest', arguments);
};




Permissao.getResponse = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getResponse', arguments);
};




Permissao.getSession = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getSession', arguments);
};




Permissao.validaSessao = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'validaSessao', arguments);
};






Permissao.filtrarAreas = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'filtrarAreas', arguments);
};





Permissao.validaNivel = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'validaNivel', arguments);
};






Permissao.validaNivel = function(p0, p1, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'validaNivel', arguments);
};





Permissao.validaNivel = function(p0, callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'validaNivel', arguments);
};




Permissao.getLoginBean = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getLoginBean', arguments);
};




Permissao.getNomsis = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getNomsis', arguments);
};




Permissao.getSubsis = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'getSubsis', arguments);
};




Permissao.isDWRRequest = function(callback) {
return dwr.engine._execute(Permissao._path, 'Permissao', 'isDWRRequest', arguments);
};


