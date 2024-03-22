// 01 

class Usuario {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  const usuarios = [
    new Usuario("Cleiton", 14),
    new Usuario("Cris", 25),
    new Usuario("Daiana", 30),
  ];
  
  const nomesMaiusculos = usuarios.map((usuario) => usuario.nome.toUpperCase());
  
  console.log(nomesMaiusculos); 

  // 02

function filtrarUsuariosMaioresDeIdade(usuarios) {
    return usuarios.filter((usuario) => usuario.idade > 18);
  }
  
  const usuariosMaioresDeIdade = filtrarUsuariosMaioresDeIdade(usuarios);
  
  console.log(usuariosMaioresDeIdade); 
  

  // 03
function find25a30(usuarios) {
    return usuarios.find((usuario) => usuario.idade >= 25 && usuario.idade <= 30);
  }
  
  const primeiroUsuarioComIdadeEntre25e30 = find25a30(usuarios);
  
  console.log(primeiroUsuarioComIdadeEntre25e30); 